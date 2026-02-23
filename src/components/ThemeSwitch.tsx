"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";

type Theme = "system" | "dark" | "light";

function applyThemeToDOM(t: Theme) {
  if (t === "system") {
    localStorage.removeItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
  } else {
    localStorage.setItem("theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }
}

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) ?? "system";
  });

  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const onSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", onSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", onSystemThemeChange);
  }, [theme]);

  const onThemeSelect = (t: Theme) => {
    setTheme(t);
    applyThemeToDOM(t);
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={() => onThemeSelect("system")}
        className="text-muted transition-colors hover:text-foreground"
        title="System theme"
      >
        <SunMoon size={16} />
      </button>
      <button
        onClick={() => onThemeSelect("dark")}
        className="text-muted transition-colors hover:text-foreground"
        title="Dark theme"
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => onThemeSelect("light")}
        className="text-muted transition-colors hover:text-foreground"
        title="Light theme"
      >
        <Sun size={16} />
      </button>
    </div>
  );
}
