# Workout Day UI

A mobile-first, RTL workout page built with React and TypeScript. Workout data is loaded from a static JSON file — no backend required.

**Live demo:** [ali-ft.github.io/workout-day-ui](https://ali-ft.github.io/workout-day-ui/)

## Stack

- React 19 · TypeScript · Vite 6 · Tailwind CSS 4 · Lucide React

## Features

- Persian UI with full RTL support (Vazirmatn)
- Light / dark theme (persisted in `localStorage`)
- Exercise cards with image, sets × reps, rest time, and muscle tags
- Detail panel with video, metadata, coach tip, and step-by-step instructions
- Responsive layout (single column on mobile, 2-column grid on desktop)

## Getting started

**Requirements:** Node.js 18+

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

Build for GitHub Pages (subpath `/workout-day-ui/`):

```bash
VITE_BASE_PATH=/workout-day-ui/ npm run build
```

## Project structure

```
src/
├── components/     UI components (cards, header, detail panel, icons)
├── data/           workout-day.json
├── hooks/          useTheme
├── types/          WorkoutDay, Exercise
└── utils/          toPersianNumber, formatters
```

## Data

Edit `src/data/workout-day.json` to change the workout content. The app imports it directly at build time.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the app and publishes `dist/` to the `gh-pages` branch.

In **Settings → Pages**, set the source to branch **`gh-pages`** / **`/(root)`**.
