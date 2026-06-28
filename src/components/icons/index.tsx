import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BicepsFlexed,
  ChevronLeft,
  Dumbbell,
  Flame,
  ImageOff,
  Layers,
  ListChecks,
  ListOrdered,
  Megaphone,
  Moon,
  Repeat2,
  ShieldCheck,
  Signal,
  Sun,
  Timer,
  Weight,
  X,
} from "lucide-react";

export type IconVariant =
  | "accent"
  | "teal"
  | "muscle"
  | "coach"
  | "brand"
  | "on-dark"
  | "neutral"
  | "inverse";

interface IconProps {
  className?: string;
  variant?: IconVariant;
  size?: number;
  /** پس‌زمینه رنگی برای خوانایی بهتر */
  badge?: boolean;
}

function AppIcon({
  icon: Icon,
  className = "",
  variant = "neutral",
  size = 18,
  badge = false,
}: IconProps & { icon: LucideIcon }) {
  const inner = (
    <Icon size={size} strokeWidth={1.75} aria-hidden />
  );

  if (badge) {
    return (
      <span
        className={`icon-badge icon-badge--${variant} ${className}`.trim()}
      >
        {inner}
      </span>
    );
  }

  return (
    <span className={`app-icon app-icon--${variant} ${className}`.trim()}>
      {inner}
    </span>
  );
}

function makeIcon(icon: LucideIcon, defaults?: Partial<IconProps>) {
  return function IconComponent(props: IconProps) {
    return <AppIcon icon={icon} {...defaults} {...props} />;
  };
}

/** دمبل — برند اپ */
export const IconBrand = makeIcon(Dumbbell, { variant: "brand", size: 20 });

/** ست × تکرار — تکرار حرکت */
export const IconSetsReps = makeIcon(Repeat2, {
  variant: "accent",
  size: 15,
  badge: true,
});

/** استراحت — تایمر */
export const IconRest = makeIcon(Timer, {
  variant: "teal",
  size: 15,
  badge: true,
});

/** عضله — بازو */
export const IconMuscle = makeIcon(BicepsFlexed, {
  variant: "muscle",
  size: 17,
});

/** مربی — بلندگو */
export const IconCoach = makeIcon(Megaphone, {
  variant: "coach",
  size: 20,
});

/** نکته ایمنی — سپر */
export const IconSafetyTip = makeIcon(ShieldCheck, {
  variant: "coach",
  size: 20,
});

/** دستورالعمل — لیست شماره‌دار */
export const IconSteps = makeIcon(ListOrdered, {
  variant: "accent",
  size: 17,
});

/** سطح — میله سیگنال */
export const IconLevel = makeIcon(Signal, {
  variant: "muscle",
  size: 15,
  badge: true,
});

/** شدت RPE — شعله */
export const IconIntensity = makeIcon(Flame, {
  variant: "accent",
  size: 15,
  badge: true,
});

/** تجهیزات — وزنه */
export const IconEquipment = makeIcon(Weight, {
  variant: "teal",
  size: 15,
  badge: true,
});

/** تمپو — موج ضربان */
export const IconTempo = makeIcon(Activity, {
  variant: "muscle",
  size: 15,
  badge: true,
});

/** لیست حرکات */
export const IconExerciseList = makeIcon(ListChecks, {
  variant: "accent",
  size: 18,
});

/** فلش RTL */
export const IconChevronLeft = makeIcon(ChevronLeft, {
  variant: "neutral",
  size: 18,
});

/** بستن */
export const IconClose = makeIcon(X, { variant: "inverse", size: 20 });

/** حالت تاریک */
export const IconMoon = makeIcon(Moon, { variant: "neutral", size: 15 });

/** حالت روشن */
export const IconSun = makeIcon(Sun, { variant: "coach", size: 15 });

/** تصویر موجود نیست */
export const IconExerciseFallback = makeIcon(ImageOff, {
  variant: "neutral",
  size: 28,
});

/** تعداد حرکت */
export const IconExerciseCount = makeIcon(ListChecks, {
  variant: "on-dark",
  size: 16,
});

/** تعداد ست */
export const IconSetCount = makeIcon(Layers, {
  variant: "on-dark",
  size: 16,
});
