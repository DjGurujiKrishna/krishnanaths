"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type BackgroundContextValue = {
  showBackground: boolean;
  bgOpacity: number;
  toggleBackground: (isEnabled: boolean) => void;
  setOpacity: (value: number) => void;
};

const SHOW_KEY = "showBackground";
const OPACITY_KEY = "bgOpacity";
const CHANGE_EVENT = "krishnanath-bg-change";

const BackgroundContext = createContext<BackgroundContextValue | null>(null);

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function notifyChange() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function getShowBackground() {
  try {
    const stored = localStorage.getItem(SHOW_KEY);
    return stored === null ? true : stored === "true";
  } catch {
    return true;
  }
}

function getBgOpacity() {
  try {
    const stored = localStorage.getItem(OPACITY_KEY);
    return stored === null ? 0.2 : parseFloat(stored);
  } catch {
    return 0.2;
  }
}

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const showBackground = useSyncExternalStore(
    subscribe,
    getShowBackground,
    () => true,
  );
  const bgOpacity = useSyncExternalStore(subscribe, getBgOpacity, () => 0.2);

  const toggleBackground = useCallback((isEnabled: boolean) => {
    try {
      localStorage.setItem(SHOW_KEY, String(isEnabled));
    } catch {
      // localStorage may be unavailable
    }
    notifyChange();
  }, []);

  const setOpacity = useCallback((value: number) => {
    try {
      localStorage.setItem(OPACITY_KEY, String(value));
    } catch {
      // localStorage may be unavailable
    }
    notifyChange();
  }, []);

  return (
    <BackgroundContext.Provider
      value={{
        showBackground,
        bgOpacity,
        toggleBackground,
        setOpacity,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

export default BackgroundContext;
