import { toPersianNumber } from "../utils/format";
import { IconBrand, IconExerciseCount, IconSetCount } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

interface PageHeaderProps {
  dayTitle: string;
  focus: string;
  exerciseCount: number;
  totalSets: number;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function PageHeader({
  dayTitle,
  focus,
  exerciseCount,
  totalSets,
  isDark,
  onToggleTheme,
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-header-top">
        <div className="brand-mark" aria-hidden>
          <IconBrand />
        </div>
        <span className="brand-label">تمرین امروز</span>
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>

      <div className={`page-header-body ${isDark ? "page-header-body--dark" : "page-header-body--light"}`}>
        <div className="header-decor" aria-hidden>
          <div className="header-pattern" />
          <div className="header-ring" />
          <div className="header-glow header-glow-a" />
          <div className="header-glow header-glow-b" />
          <div className="header-accent-line" />
        </div>

        <div className="header-content">
          <span className="header-focus-pill">{toPersianNumber(focus)}</span>
          <h1 className="header-title">{toPersianNumber(dayTitle)}</h1>

          <div className="header-stats-grid">
            <div className="header-stat-card header-stat-card--accent">
              <div className="header-stat-card-icon">
                <IconExerciseCount />
              </div>
              <div className="header-stat-card-text">
                <span className="header-stat-card-value">
                  {toPersianNumber(exerciseCount)}
                </span>
                <span className="header-stat-card-label">حرکت</span>
              </div>
            </div>

            <div className="header-stat-card header-stat-card--teal">
              <div className="header-stat-card-icon">
                <IconSetCount />
              </div>
              <div className="header-stat-card-text">
                <span className="header-stat-card-value">
                  {toPersianNumber(totalSets)}
                </span>
                <span className="header-stat-card-label">ست کل</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
