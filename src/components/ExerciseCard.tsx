import {
  formatRestShort,
  formatSetsReps,
  getPrimaryMuscle,
  toPersianNumber,
} from "../utils/format";
import type { Exercise } from "../types/workout";
import {
  IconChevronLeft,
  IconRest,
  IconSetsReps,
} from "./icons";
import { ExerciseImage } from "./ExerciseImage";

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
  onSelect: (exercise: Exercise) => void;
}

export function ExerciseCard({ exercise, index, onSelect }: ExerciseCardProps) {
  const primaryMuscle = getPrimaryMuscle(exercise.muscles);

  return (
    <button
      type="button"
      className="exercise-card"
      style={{ animationDelay: `${index * 70}ms` }}
      onClick={() => onSelect(exercise)}
      aria-label={`مشاهده جزئیات ${exercise.name_fa}`}
    >
      <div className="exercise-card-image-wrap">
        <ExerciseImage
          src={exercise.image_url}
          alt={exercise.name_fa}
          className="exercise-card-image"
        />
        <span className="exercise-card-index">
          {toPersianNumber(index + 1)}
        </span>
      </div>

      <div className="exercise-card-body">
        <div className="exercise-card-head">
          <h2 className="exercise-card-title">{exercise.name_fa}</h2>
          <p className="exercise-card-subtitle">{exercise.name_en}</p>
        </div>

        <div className="exercise-card-meta">
          <span className="meta-chip meta-chip-primary">
            <IconSetsReps />
            {formatSetsReps(exercise.sets, exercise.reps)}
          </span>
          <span className="meta-chip meta-chip-rest">
            <IconRest />
            {formatRestShort(exercise.rest_sec)}
          </span>
        </div>

        <div className="exercise-card-footer">
          <span className="muscle-tag">{primaryMuscle}</span>
          <span className="exercise-card-chevron" aria-hidden>
            <IconChevronLeft />
          </span>
        </div>
      </div>
    </button>
  );
}
