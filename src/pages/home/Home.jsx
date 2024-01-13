import Nav from "../../components/nav/Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// swiper
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// style
import styles from "./home.module.css";
// font awesome
import { faHeadset, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";
// img
import test from "../../data/imgs/test.png";
import app from "../../data/imgs/mobile app.jpg";
// components
import Shop_Categorie from "../../components/shop categorie/Shop_Categorie";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";


function Home() {
  return (
    <>

      <main className={styles.main}>
        <div className={styles.main_content}>
          <h2>Low Carb Protein</h2>
          <p>
            It’s the idea that inspires everything we do, because we believe the
            simplest things lead to the best results. We’re passionate about
            smart nutrition, staying fit, and enjoying life’s adventures – all
            while inspiring others to do the same.
          </p>
          <Link className={styles.link}>Shop Now</Link>
        </div>
        <div className={styles.swiper}>
          <Swiper
            autoplay={{ delay: 3000 }}
            modules={[Pagination, Autoplay]}
            className={styles.main_swiper}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: "true",
            }}
          >
            <SwiperSlide className={styles.slide}>
              <img src={test} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={test} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={test} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src={test} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.inf}>
          <div>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faHeadset} />
            </span>
            <span>
              <h3>24 hour </h3> <p>customer service</p>
            </span>
          </div>
          <div>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faMoneyBill} />
            </span>
            <span>
              <h3>Payment in cash </h3>
              <p> or card</p>
            </span>
          </div>
          <div>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faSpaceAwesome} />
            </span>
            <span>
              <h3>Free delivery for </h3> <p>purchases over $100</p>
            </span>
          </div>
        </div>
      </main>
      <h2 className={styles.title}>
        Shop From <span style={{ color: "#1594F8" }}>Top Categories</span>
      </h2>

      <section>
        <Shop_Categorie />
      </section>
      <section style={{ marginTop: "100px" }}>
        <Products />
      </section>

      <div className={styles.app}>
        <a>
          <img src={app} alt="" />
        </a>
      </div>

    </>
  );
}

export default Home;
