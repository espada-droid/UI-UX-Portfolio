import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // ────────────────────────────────────────────────────────────────
  // 1. INIT: read from localStorage OR prefers‑color‑scheme
  // ────────────────────────────────────────────────────────────────
  const getInitial = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDark, setIsDark] = useState<boolean>(getInitial);

  // ────────────────────────────────────────────────────────────────
  // 2. Side‑effect: keep <html class="dark"> in sync
  // ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  // ────────────────────────────────────────────────────────────────
  // 3. Toggle handler (memoised)
  // ────────────────────────────────────────────────────────────────
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  // ────────────────────────────────────────────────────────────────
  // 4. Provider
  // ────────────────────────────────────────────────────────────────
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
