import { useState } from "react";
import styles from "./model.module.css";
import car_01 from "../../../assets/car_01.png";
import car_02 from "../../../assets/car_02.png";
import car_03 from "../../../assets/car_03.png";
import Car_04 from "../../../assets/Car_04.png";
import showroom_arw_left from "../../../assets/showroom_arw_left.png";
import showroom_arw_right from "../../../assets/showroom_arw_right.png";
import Plus from "../../../assets/Plus.png";

function ModelShowroom() {
  const models = [
    {
      id: 1,
      name: "2014 Q50",
      image: car_01,
      price: "$37,500",
    },
    {
      id: 2,
      name: "2014 QX70",
      image: car_02,
      price: "$53,350",
    },
    {
      id: 3,
      name: "2014 QX50",
      image: car_03,
      price: "$37,900",
    },
    {
      id: 4,
      name: "2014 QX60",
      image: Car_04,
      price: "$43,000",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? models.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
  };

  // Get 4 visible cards starting from currentIndex
  const getVisibleModels = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(models[(currentIndex + i) % models.length]);
    }
    return visible;
  };

  return (
    <section className={styles.modelShowroom}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>MODEL SHOWROOM</h2>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.carouselWrapper}>
            <button className={styles.arrowBtn} onClick={handlePrev}>
              <img src={showroom_arw_left} alt="Previous" />
            </button>

            {getVisibleModels().map((model, index) => (
              <div key={`${model.id}-${index}`} className={styles.carouselCard}>
                <h3>{model.name}</h3>
                <div className={styles.carImage}>
                  <img src={model.image} alt={model.name} />
                </div>
                <p className={styles.price}>Starting at {model.price}</p>
                <img src={Plus} alt="View details" className={styles.plusIcon} />
              </div>
            ))}

            <button className={styles.arrowBtn} onClick={handleNext}>
              <img src={showroom_arw_right} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModelShowroom;
