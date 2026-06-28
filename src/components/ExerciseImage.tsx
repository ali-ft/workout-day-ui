import { useState } from "react";
import { IconExerciseFallback } from "./icons";

interface ExerciseImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ExerciseImage({ src, alt, className = "" }: ExerciseImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div
        className={`exercise-image-fallback ${className}`}
        aria-label={alt}
        role="img"
      >
        <IconExerciseFallback />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 skeleton-shimmer" aria-hidden />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
