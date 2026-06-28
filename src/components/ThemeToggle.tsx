import { IconMoon, IconSun } from "./icons";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  const label = isDark ? "حالت تاریک" : "حالت روشن";

  return (
    <div className="theme-switcher">
      <span className="theme-switcher-label" aria-hidden>
        {label}
      </span>
      <button
        type="button"
        onClick={onToggle}
        className="theme-toggle"
        aria-label={isDark ? "فعال‌سازی حالت روشن" : "فعال‌سازی حالت تاریک"}
      >
        <span className="theme-toggle-track">
          <span className={`theme-toggle-thumb ${isDark ? "is-dark" : ""}`}>
            {isDark ? <IconMoon /> : <IconSun />}
          </span>
        </span>
      </button>
    </div>
  );
}
