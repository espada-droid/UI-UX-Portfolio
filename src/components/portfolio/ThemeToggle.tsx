import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-md text-sm bg-border/20 hover:bg-border transition-colors"
    >
      {isDark ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
};

export default ThemeToggle;
