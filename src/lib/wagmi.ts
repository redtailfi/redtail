import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base } from "wagmi/chains";
import { cookieStorage, createStorage } from "wagmi";
import { SITE } from "@/lib/constants";

export const wagmiConfig = getDefaultConfig({
  appName: SITE.name,
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!,
  chains: [base],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
