"use client";
import dynamic from 'next/dynamic';
import styles from "./page.module.css";

// Dynamically import components with ssr: false to disable SSR
const MovieSlider = dynamic(() => import("./components/Slider/MovieSlider"), { ssr: false });
const CardSlider = dynamic(() => import("./components/CardSlider/CardSlider"), { ssr: false });
const MostWatched = dynamic(() => import("./components/MostWatched/MostWatched"), { ssr: false });
const TrendingMovies = dynamic(() => import("./components/TrendingMovies/TrendingMovies"), { ssr: false });

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MovieSlider />
        <CardSlider />
        <MostWatched />
        <TrendingMovies />
      </main>
    </div>
  );
}
