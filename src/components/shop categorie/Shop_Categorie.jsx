// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// img
import test from "../../data/imgs/test.png";

// style
import styles from "./shop_categorie.module.css";
import { useEffect, useState } from "react";
function Shop_Categorie() {
  const [categorie,setCtegorie]=useState();
  useEffect (()=>{
    fetch('/home/banners?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzA1MDgwNTIzLCJleHAiOjE3MDUwODQxMjMsIm5iZiI6MTcwNTA4MDUyMywianRpIjoiQ09pM3pRVUxna3dPNW1zeSIsInN1YiI6IjMwIiwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.PxTJkQ2l8Le4iwzxz1XFp8Hn6zfKaKpQibFklrXliZ4')
    .then(response=> response.json())
    .then(data => setCtegorie(data))
    
  })

  return (

    <>
      <div className={styles.main}>
        <Swiper slidesPerView={"auto"} spaceBetween={30}>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={test} alt="" /> <span>gamal</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Shop_Categorie;
