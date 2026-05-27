import styles from "./welcome.module.css";
import bg from "../../../assets/welcome_bg.png";
import violet_bg from "../../../assets/viloet_bg.png";
import gray_bg from "../../../assets/gray_bg.png";

import dedicated_hover from "../../../assets/dedicated_hover.png";
import professional from "../../../assets/professional.png";
import family_owned from "../../../assets/family_owned.png";

import readmore from "../../../assets/read-more.png";

function WelcomeSection() {
  return (
    <section
      className={styles.welcomeSection}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>WELCOME TO MARKHAM INFINITI</h2>

          <p>
            Markham Infiniti is a family owned business in Toronto that has
            been servicing the GTA market since Infiniti was introduced.
            Agincourt Infiniti was one of the original fifteen Infiniti dealers
            appointed in Canada in 1990, and in October 2007 we relocated to
            Unionville, Ontario under our new name "Markham Infiniti".
          </p>
        </div>

        {/* CARDS */}
        <div className={styles.cardsWrapper}>
          {/* CARD 1 */}
          <div className={styles.diamondCard}>
            {/* Backgrounds */}
            <img
              src={gray_bg}
              alt=""
              className={`${styles.diamondBg} ${styles.defaultBg}`}
            />

            <img
              src={violet_bg}
              alt=""
              className={`${styles.diamondBg} ${styles.hoverBg}`}
            />

            <div className={styles.content}>
              <img
                src={family_owned}
                alt=""
                className={styles.staticIcon}
              />

              <h3>FAMILY OWNED</h3>

              <p>
                In our continual dedication to exceed our customers'
                expectations.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles.diamondCard}>
            {/* Backgrounds */}
            <img
              src={gray_bg}
              alt=""
              className={`${styles.diamondBg} ${styles.defaultBg}`}
            />

            <img
              src={violet_bg}
              alt=""
              className={`${styles.diamondBg} ${styles.hoverBg}`}
            />

            <div
              className={`${styles.content} ${styles.purpleContent}`}
            >

              <h3>DEDICATED TO YOU</h3>

              <p>
                We have grown from that first sale to now selling
                hundreds of Infiniti's per year in the greater Toronto
                area. Our Infiniti service business is one of the
                largest in Canada.
              </p>

              <h6>
                Read more
                <img
                  src={readmore}
                  alt="readmore"
                  className={styles.readmore}
                />
              </h6>
            </div>
          </div>

          {/* CARD 3 */}
          <div className={styles.diamondCard}>
            {/* Backgrounds */}
            <img
              src={gray_bg}
              alt=""
              className={`${styles.diamondBg} ${styles.defaultBg}`}
            />

            <img
              src={violet_bg}
              alt=""
              className={`${styles.diamondBg} ${styles.hoverBg}`}
            />

            <div className={styles.content}>
              <img
                src={professional}
                alt=""
                className={styles.staticIcon}
              />

              <h3>FRIENDLY AND PROFESSIONAL</h3>

              <p>
                Our Infiniti service business is one of the largest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;