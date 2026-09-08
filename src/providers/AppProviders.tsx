"use client";

import { type ReactNode } from "react";
import { BackgroundProvider } from "@/context/BackgroundContext";
import AosInit from "@/components/AosInit";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BackgroundProvider>
      <AosInit />
      {children}
    </BackgroundProvider>
  );
}
