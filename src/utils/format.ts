const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

export function toPersianNumber(value: number | string): string {
  return String(value).replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]);
}

export function formatSetsReps(sets: number, reps: number): string {
  return toPersianNumber(`${sets} × ${reps}`);
}

export function formatRest(seconds: number): string {
  if (seconds >= 60) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return secs > 0
      ? toPersianNumber(`${mins} دقیقه ${secs} ثانیه`)
      : toPersianNumber(`${mins} دقیقه`);
  }
  return toPersianNumber(`${seconds} ثانیه`);
}

export function formatRestShort(seconds: number): string {
  if (seconds >= 60) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return secs > 0
      ? toPersianNumber(`${mins}:${secs.toString().padStart(2, "0")}`)
      : toPersianNumber(`${mins} دقیقه`);
  }
  return toPersianNumber(`${seconds}ث`);
}

export function getPrimaryMuscle(muscles: string[]): string {
  return muscles[0] ?? "—";
}
