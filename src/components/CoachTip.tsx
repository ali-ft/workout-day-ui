import { toPersianNumber } from "../utils/format";
import { IconCoach } from "./icons";

interface CoachTipProps {
  tip: string;
}

export function CoachTip({ tip }: CoachTipProps) {
  return (
    <aside className="coach-tip" aria-label="نکته مربی">
      <div className="coach-tip-icon" aria-hidden>
        <IconCoach />
      </div>
      <div className="coach-tip-content">
        <p className="coach-tip-label">نکته مربی</p>
        <p className="coach-tip-text">{toPersianNumber(tip)}</p>
      </div>
    </aside>
  );
}
