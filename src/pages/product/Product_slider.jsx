import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// img
import test from "../../data/imgs/test.png";
// style
import styles from "./product_slider.module.css";
// font awesome
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Product_slider() {
  return (
    <>
      <div className={styles.swiper}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" />
            <div className={styles.content}>
              <h3>Laperva Triple Mass </h3>
              <h2>₹ 675.00</h2>
              <h3>5 types available</h3>
              <div className={styles.icons}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" />
            <div className={styles.content}>
              <h3>Laperva Triple Mass </h3>
              <h2>₹ 675.00</h2>
              <h3>5 types available</h3>
              <div className={styles.icons}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" />
            <div className={styles.content}>
              <h3>Laperva Triple Mass </h3>
              <h2>₹ 675.00</h2>
              <h3>5 types available</h3>
              <div className={styles.icons}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" />
            <div className={styles.content}>
              <h3>Laperva Triple Mass </h3>
              <h2>₹ 675.00</h2>
              <h3>5 types available</h3>
              <div className={styles.icons}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" />
            <div className={styles.content}>
              <h3>Laperva Triple Mass </h3>
              <h2>₹ 675.00</h2>
              <h3>5 types available</h3>
              <div className={styles.icons}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" />
            <div className={styles.content}>
              <h3>Laperva Triple Mass </h3>
              <h2>₹ 675.00</h2>
              <h3>5 types available</h3>
              <div className={styles.icons}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" />
            <div className={styles.content}>
              <h3>Laperva Triple Mass </h3>
              <h2>₹ 675.00</h2>
              <h3>5 types available</h3>
              <div className={styles.icons}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" />
            <div className={styles.content}>
              <h3>Laperva Triple Mass </h3>
              <h2>₹ 675.00</h2>
              <h3>5 types available</h3>
              <div className={styles.icons}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" />
            <div className={styles.content}>
              <h3>Laperva Triple Mass </h3>
              <h2>₹ 675.00</h2>
              <h3>5 types available</h3>
              <div className={styles.icons}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Product_slider;
