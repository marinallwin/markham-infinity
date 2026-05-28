import { useState } from "react";
import styles from "./media.module.css";
import event from "../../../assets/event.png";
import video_left_arw from "../../../assets/video_left_arw.png";
import video_right_arw from "../../../assets/video_right_arw.png";
import video from "../../../assets/video.mp4"

function MediaSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className={styles.mediaSection}>
      <div className={styles.container}>
        {/* NEWS AND EVENTS */}
        <div className={styles.newsSection}>
          <div className={styles.sectionHeader}>
            <h2>NEWS AND EVENTS</h2>
            <div className={styles.navButtons}>
              <button className={styles.navBtn}>
                <img src={video_left_arw} alt="Previous" />
              </button>
              <button className={styles.navBtn}>
                <img src={video_right_arw} alt="Next" />
              </button>
            </div>
          </div>

          <div className={styles.newsContent}>
            <p className={styles.newsTitle}>Infiniti reveals Q30 Concept</p>
            <div className={styles.newsImage}>
              <img src={event} alt="Infiniti Q30 Concept" />
            </div>
            <p className={styles.newsDescription}>
              Infiniti today revealed the next step in its strategy to expand
              into new premium segments with the debut of the Q30 Concept at
              the Frankfurt Motor Show. The sleek, seductive Q30 Concept...{" "}
              <span className={styles.readMore}>Read more »</span>
            </p>
          </div>
        </div>

        {/* PROMOTIONAL VIDEO */}
        <div className={styles.videoSection}>
          <div className={styles.sectionHeader}>
            <h2>PROMOTIONAL VIDEO</h2>
          </div>

          <div className={styles.videoContent}>
            <p className={styles.videoTitle}>
              Infiniti Canada fan surprised with Trip of a Lifetime
            </p>
            <div className={styles.videoPlaceholder}>

              <video
                className={styles.videoPlayer}
                src={video}
                controls
                autoPlay
                // muted
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaSection;