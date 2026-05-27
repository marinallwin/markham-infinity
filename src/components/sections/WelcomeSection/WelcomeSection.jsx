// import React from "react";
// import styles from "./welcome.module.css";
// import bg from "../../../assets/welcome_bg.png";
// import viloet_bg from "../../../assets/viloet_bg.png";
// import gray_bg from "../../../assets/gray_bg.png";
// import dedicated_hover from "../../../assets/dedicated_hover.png";
// import professional from "../../../assets/professional.png";
// import professional_hover from "../../../assets/professional_hover.png";
// import family_owned from "../../../assets/family_owned.png";
// import family_owned_hover from "../../../assets/family_owned_hover.png";

// function WelcomeSection() {
//   return (
//     <section
//       className={styles.welcomeSection}
//       style={{
//         backgroundImage: `url(${bg})`,
//       }}
//     ></section>
//   );
// }

// export default WelcomeSection;



import React from "react";
import styles from "./welcome.module.css";

import bg from "../../../assets/welcome_bg.png";

import viloet_bg from "../../../assets/viloet_bg.png";
import gray_bg from "../../../assets/gray_bg.png";

import dedicated_hover from "../../../assets/dedicated_hover.png";
import professional from "../../../assets/professional.png";
import family_owned from "../../../assets/family_owned.png";

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

        {/* BACKGROUND DIAMONDS */}
        <div className={styles.leftDiamond}></div>
        <div className={styles.rightDiamond}></div>

        {/* CARDS */}
        <div className={styles.cardsWrapper}>
          {/* LEFT CARD */}
          <div
            className={styles.card}
            style={{
              backgroundImage: `url(${gray_bg})`,
            }}
          >
            <img src={family_owned} alt="" />

            <h3>FAMILY OWNED</h3>

            <p>
              In our continual dedication to exceed our customers'.
            </p>
          </div>

          {/* CENTER CARD */}
          <div className={styles.centerWrapper}>
            {/* TOP SMALL DIAMOND */}
            <div className={styles.smallDiamond}>
              <div className={styles.smallDiamondInner}>
                <img src={dedicated_hover} alt="" />
              </div>
            </div>

            <div
              className={styles.centerCard}
              style={{
                backgroundImage: `url(${viloet_bg})`,
              }}
            >
              <h3>DEDICATED TO YOU</h3>

              <p>
                We have grown from that first sale to now selling hundreds of
                Infiniti's per year in the greater Toronto area.
              </p>

              <button>Read more</button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className={styles.card}
            style={{
              backgroundImage: `url(${gray_bg})`,
            }}
          >
            <img src={professional} alt="" />

            <h3>FRIENDLY AND PROFESSIONAL</h3>

            <p>
              Our Infiniti service business is one of the largest..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;