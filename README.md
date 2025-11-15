# PhotochroMe Website

Website untuk layanan photobooth luxury PhotochroMe, dibangun dengan Next.js 16, TypeScript, dan Tailwind CSS.

## Fitur

- Header dengan logo PhotochroMe dan navigasi
- Hero section dengan video interaktif
- Section layanan (Weddings, Corporate Events, Birthday Parties)
- Desain responsif dan modern
- Optimasi performa dengan Next.js

## Cara Menjalankan

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser dan akses `http://localhost:3000`

## Struktur Project

```
photochrome-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── logo.png
│   └── hero-video.mp4
├── package.json
└── tailwind.config.ts
```

## Build untuk Production

```bash
npm run build
npm start
```
