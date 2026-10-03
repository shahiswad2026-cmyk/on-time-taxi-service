# On Time Taxi Service | Meghalaya

A fast, modern static web application for **On Time Taxi Service**, a premier private taxi service operating across Meghalaya (Shillong, Sohra, Dawki, Mawlynnong).

Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed for instant static hosting on **Vercel** with no backend or environment variables required.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```
This generates the optimized static assets in the `dist` folder.

To preview the production build locally:
```bash
npm run preview
```

---

## 📸 Adding the Taxi Photos

Put your four taxi photos in the `public/images/` directory with these exact file names:

| File Name | Description / View |
| :--- | :--- |
| `car-1.jpg` | Front view on a hill |
| `car-2.jpg` | Three-quarter view on a hill |
| `car-3.jpg` | Front view under a wooden canopy |
| `car-4.jpg` | Side view on a road at sunset |

### Photo Placements:
- **Hero Card**: Uses `car-2.jpg` (three-quarter view on a hill).
- **Vehicle Tab Card**: Uses `car-1.jpg` (front view on a hill).
- **Gallery Carousel**: Cycles through all four photos (`car-1.jpg` to `car-4.jpg`) in order with touch swipe, navigation arrows, and pagination dots.
- **Graceful Fallback**: If an image file is not found, the site displays a clean dark card fallback rather than raw alt text.

---

## 🌐 Deploying on Vercel

This project is pre-configured with `vercel.json` for seamless static deployment:

1. Push your repository to **GitHub** (or GitLab / Bitbucket).
2. Go to your [Vercel Dashboard](https://vercel.com/new) and click **"Add New Project"**.
3. **Import** your GitHub repository.
4. Vercel will automatically detect the settings from `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your site will be live on a global CDN in seconds with no environment variables required!
