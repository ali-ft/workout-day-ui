import { useState } from "react";
import workoutData from "./data/workout-day.json";
import type { Exercise, WorkoutDay } from "./types/workout";
import { CoachTip } from "./components/CoachTip";
import { ExerciseCard } from "./components/ExerciseCard";
import { ExerciseDetail } from "./components/ExerciseDetail";
import { PageHeader } from "./components/PageHeader";
import { IconExerciseList } from "./components/icons";
import { useTheme } from "./hooks/useTheme";

const workout = workoutData as WorkoutDay;

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const totalSets = workout.exercises.reduce((sum, ex) => sum + ex.sets, 0);

  const handleSelect = (exercise: Exercise, index: number) => {
    setSelected(exercise);
    setSelectedIndex(index);
  };

  return (
    <div className="app-shell">
      <div className="ambient-glow ambient-glow-a" aria-hidden />
      <div className="ambient-glow ambient-glow-b" aria-hidden />

      <main className="app-main">
        <PageHeader
          dayTitle={workout.day_title}
          focus={workout.focus}
          exerciseCount={workout.exercises.length}
          totalSets={totalSets}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />

        <CoachTip tip={workout.coach_tip} />

        <section aria-label="لیست حرکات">
          <div className="section-head">
            <h2 className="section-title">
              <IconExerciseList className="section-title-icon" />
              حرکات امروز
            </h2>
            <p className="section-desc">برای مشاهده ویدیو و جزئیات، روی هر حرکت بزنید</p>
          </div>

          <div className="exercise-grid">
            {workout.exercises.map((exercise, index) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                index={index}
                onSelect={() => handleSelect(exercise, index)}
              />
            ))}
          </div>
        </section>
      </main>

      {selected && (
        <ExerciseDetail
          exercise={selected}
          index={selectedIndex}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
