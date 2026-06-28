import { useEffect, useRef } from "react";
import type { Exercise } from "../types/workout";
import {
  formatRest,
  formatSetsReps,
  toPersianNumber,
} from "../utils/format";
import {
  IconClose,
  IconEquipment,
  IconIntensity,
  IconLevel,
  IconMuscle,
  IconRest,
  IconSafetyTip,
  IconSetsReps,
  IconSteps,
  IconTempo,
} from "./icons";

interface ExerciseDetailProps {
  exercise: Exercise;
  index: number;
  onClose: () => void;
}

export function ExerciseDetail({ exercise, index, onClose }: ExerciseDetailProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="detail-overlay"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="detail-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
      >
        <div className="detail-video-wrap">
          <video
            key={exercise.id}
            src={exercise.video_url}
            poster={exercise.image_url}
            controls
            playsInline
            preload="metadata"
            className="detail-video"
          >
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
          <button
            ref={closeBtnRef}
            type="button"
            className="detail-close"
            onClick={onClose}
            aria-label="بستن جزئیات"
          >
            <IconClose />
          </button>
        </div>

        <div className="detail-scroll">
          <div className="detail-header">
            <span className="detail-index">
              حرکت {toPersianNumber(index + 1)}
            </span>
            <h2 id="detail-title" className="detail-title">
              {exercise.name_fa}
            </h2>
            <p className="detail-subtitle">{exercise.name_en}</p>
          </div>

          <div className="detail-meta">
            <div className="detail-meta-row detail-meta-row--primary">
              <div className="detail-meta-card detail-meta-card--accent">
                <IconSetsReps badge={false} />
                <div className="detail-meta-card-body">
                  <span className="detail-meta-card-label">ست × تکرار</span>
                  <span className="detail-meta-card-value">
                    {formatSetsReps(exercise.sets, exercise.reps)}
                  </span>
                </div>
              </div>
              <div className="detail-meta-card detail-meta-card--teal">
                <IconRest badge={false} />
                <div className="detail-meta-card-body">
                  <span className="detail-meta-card-label">استراحت</span>
                  <span className="detail-meta-card-value">
                    {formatRest(exercise.rest_sec)}
                  </span>
                </div>
              </div>
            </div>
            <div className="detail-meta-row detail-meta-row--secondary">
              <div className="detail-meta-chip detail-meta-chip--neutral">
                <IconEquipment badge={false} size={14} />
                <span>{exercise.equipment}</span>
              </div>
              <div className="detail-meta-chip detail-meta-chip--muscle">
                <IconLevel badge={false} size={14} />
                <span>{exercise.difficulty_fa}</span>
              </div>
              <div className="detail-meta-chip detail-meta-chip--accent">
                <IconIntensity badge={false} size={14} />
                <span>RPE {toPersianNumber(exercise.target_rpe)}</span>
              </div>
              <div className="detail-meta-chip detail-meta-chip--muscle">
                <IconTempo badge={false} size={14} />
                <span>تمپو {toPersianNumber(exercise.tempo)}</span>
              </div>
            </div>
          </div>

          <section className="detail-section" aria-labelledby="muscles-heading">
            <h3 id="muscles-heading" className="detail-section-title">
              <IconMuscle />
              عضلات درگیر
            </h3>
            <div className="detail-muscles">
              {exercise.muscles.map((muscle) => (
                <span key={muscle} className="muscle-tag muscle-tag-lg">
                  {muscle}
                </span>
              ))}
            </div>
          </section>

          {exercise.tip && (
            <aside className="detail-tip" aria-label="نکته مربی">
              <IconSafetyTip />
              <p>{toPersianNumber(exercise.tip)}</p>
            </aside>
          )}

          <section className="detail-section" aria-labelledby="instructions-heading">
            <h3 id="instructions-heading" className="detail-section-title">
              <IconSteps />
              نحوه انجام
            </h3>
            <ol className="detail-steps">
              {exercise.instructions_fa.map((step, i) => (
                <li key={i} className="detail-step">
                  <span className="detail-step-num">{toPersianNumber(i + 1)}</span>
                  <p>{toPersianNumber(step)}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
