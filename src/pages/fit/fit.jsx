// style
import styles from "./fit.module.css";
// components
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
// imgs
import one from "../../data/imgs/1.png";
import tow from "../../data/imgs/2.png";
import three from "../../data/imgs/3.png";
import four from "../../data/imgs/4.png";
import five from "../../data/imgs/5.png";
import six from "../../data/imgs/6.png";
import sseven from "../../data/imgs/7.png";
import content_one from "../../data/imgs/content img 1.jpg";
import content_two from "../../data/imgs/content img 2.jpg";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Fit() {
  return (
    <>
     
      <main className={styles.main}>
        <div className={styles.imgs_container}>
          <div className={styles.active}>
            <img src={one} alt="" />
          </div>
          <div>
            <img src={tow} alt="" />
          </div>
          <div>
            <img src={three} alt="" />
          </div>
          <div>
            <img src={four} alt="" />
          </div>
          <div>
            <img src={five} alt="" />
          </div>
          <div>
            <img src={six} alt="" />
          </div>
          <div>
            <img src={sseven} alt="" />
          </div>
        </div>

        <div className={styles.content_container}>
          <div className={styles.content}>
            <div className={styles.first}>
              <div className={styles.left}>
                <p>
                  Flexibility and stretching class delivered with a sense of
                  spiritual and physical wellbeing. Styles of yoga are focused
                  on a combination of Hatha and Ashtanga- dynamic moving and
                  breathing yoga as opposed to stand still and hold a pose
                </p>
                <div className={styles.btn}>
                  See More{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.img}>
                  <img src={content_one} alt="" />
                </div>
              </div>
            </div>

            <div className={styles.second}>
              <div className={styles.img}>
                <img src={content_two} alt="" />
              </div>
              <div className={styles.left}>
                <p>
                  Push your body to the limit in this high-intensity cardio
                  class. Designed for all levels of fitness, utilising cardio
                  equipment and body weight exercises
                </p>
                <div className={styles.btn}>
                  See More{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </div>
              <div className={styles.right}></div>
            </div>

            <div className={styles.right}></div>
          </div>

          <div className={styles.more}>
            More Blogs
          </div>
        </div>
      </main>
     
    </>
  );
}

export default Fit;
