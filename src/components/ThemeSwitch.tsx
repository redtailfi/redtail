"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"system" | "dark" | "light">("system");

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as "system" | "dark" | "light" | null;
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    }
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const applyTheme = (theme: "system" | "dark" | "light") => {
    setTheme(theme);

    if (theme === "system") {
      localStorage.removeItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    } else {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex gap-3">
      <button onClick={() => applyTheme("system")} className="text-muted transition-colors hover:text-foreground"><SunMoon size={16} /></button>
      <button onClick={() => applyTheme("dark")} className="text-muted transition-colors hover:text-foreground"><Moon size={16} /></button>
      <button onClick={() => applyTheme("light")} className="text-muted transition-colors hover:text-foreground"><Sun size={16} /></button>
    </div>
  );
}

