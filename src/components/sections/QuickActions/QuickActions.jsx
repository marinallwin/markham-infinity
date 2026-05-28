import React from 'react'
import styles from './quick.module.css'
import Dotted_01 from "../../../assets/dotted_01.png"
import Dotted_02 from "../../../assets/dotted_02.png"
import Dotted_03 from "../../../assets/dotted_03.png"
import cta_01 from "../../../assets/cta_01.png"
import cta_02 from "../../../assets/cta_02.png"
import cta_03 from "../../../assets/cta_03.png"
import cta_04 from "../../../assets/cta_04.png"
import shadow from "../../../assets/shadow.png"


function QuickActions() {
  return (
    <section className={styles.sectionMain}>
      <div className={styles.quickContainer}>
        <div className={styles.card}>
          <img src={cta_01} alt='new vehicles' />
          <h4>Shop New Vehicles</h4>
          <img src={shadow} alt='shadow' className={styles.shadow} />
        </div>

        <span className={styles.dashed}>
        </span>

        <div className={styles.card}>
          <img src={cta_02} alt='used vehicles' />
          <h4>Shop Used Vehicles</h4>
          <img src={shadow} alt='shadow' className={styles.shadow} />
        </div>

        <span className={styles.dashed}></span>

        <div className={styles.card}>
          <img src={cta_03} alt='service' />
          <h4>Shop new vehicles</h4>
          <img src={shadow} alt='shadow' className={styles.shadow} />
        </div>

        <span className={styles.dashed}></span>

        <div className={styles.card}>
          <img src={cta_04} alt='gifts' />
          <h4>Specials</h4>
          <img src={shadow} alt='shadow' className={styles.shadow} />
        </div>
      </div>
    </section>
  )
}

export default QuickActions