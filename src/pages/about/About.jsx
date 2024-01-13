// img
import bg from "../../data/imgs/aboutBg.jpg";
import first from "../../data/imgs/first_img.png";
import second from "../../data/imgs/second_img.png";
// components
import Nav from "./../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
// styles
import styles from "./about.module.css";
// cart provider
import { CartProvider } from "react-use-cart";
function About() {
  return (
    <CartProvider>


      <main className={styles.main}>
        <img src={bg} alt="" />
        <h2>About Us</h2>
      </main>
      <div className={styles.content}>
        <div className={styles.first}>
          <div className={styles.text}>
            <h3>Welcome to Our Family</h3>

            <p>
              There are no judgments here – No too much or not enough. No glares
              of disapproval. Here we keep open minds. We are nurturers. We seek
              only to encourage, empower and entertain. There is no one type.
              There is no one reason. There is no one way.
            </p>
            <p>
              What we are is a diverse community; what we have is a culture of
              fun; what there is, is room for everyone: all kinds of people with
              all kinds of goals who’ve chosen to come reach them with us.
            </p>
          </div>
          <img src={first} alt="" />
        </div>

        <div className={styles.second}>
          <div className={styles.img}>
            <img src={second} alt="" />
          </div>
          <div className={styles.text}>
            <h3>Why We Do What We Do</h3>

            <p>
              There are no judgments here – No too much or not enough. No glares
              of disapproval. Here we keep open minds. We are nurturers. We seek
              only to encourage, empower and entertain. There is no one type.
              There is no one reason. There is no one way.
            </p>
            <p>
              What we are is a diverse community; what we have is a culture of
              fun; what there is, is room for everyone: all kinds of people with
              all kinds of goals who’ve chosen to come reach them with us.
            </p>
          </div>
        </div>
      </div>

    </CartProvider>
  );
}

export default About;
