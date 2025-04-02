import Image from "next/image";
import styles from "./page.module.css";
import MovieSlider from "./components/Slider/MovieSlider";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <MovieSlider />
      </main>
    
    </div>
  );
}
