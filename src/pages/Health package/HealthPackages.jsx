import React from "react";
import styles from "./HealthPackages.module.css";
// components
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
const HealthPackages = () => {
  return (
    <>


      <main className={styles.main}>
        <div className={styles.title}>
          <h3>Health packages</h3>

          <div className={styles.nav}>
            <ul>
              <li className={styles.active}>
                <Link className={styles.link}>Weight Management Package</Link>
              </li>
              <li className={styles.link}>
                <Link className={styles.link}>Athletes Packages</Link>
              </li>
              <li className={styles.link}>
                <Link className={styles.link}>Diet Food Packages</Link>
              </li>
              <li className={styles.link}>
                <Link className={styles.link}>Online Packages</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.sec_title}>
          <h2>Pricing</h2>
        </div>
        <div className={styles.packages}>
          <div className={styles.box}>
            <div className={styles.box_title}>
              <h4>Basic</h4>
              <p>Save 30%</p>
            </div>

            <div className={styles.money}>
              <div className={styles.first}>
                $7.99<span>/month</span>
              </div>
              <div className={styles.second}>Billed as $96 per year</div>
              <div className={styles.ul}>
                <ul>
                  <li>22 Points</li>
                  <li>2 min months</li>
                  <li>1 min product</li>
                  <li>500 voucher</li>
                  <li>20% discount card</li>
                  <li>IR Availiable</li>
                </ul>
              </div>
              <div className={styles.btn}>Get Started</div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.box_title}>
              <h4>Basic</h4>
              <p className={styles.popular}>popular</p>

            </div>

            <div className={styles.money}>
              <div className={styles.first}>
                $7.99<span>/month</span>
              </div>
              <div className={styles.second}>Billed as $96 per year</div>
              <div className={styles.ul}>
                <ul>
                  <li>22 Points</li>
                  <li>2 min months</li>
                  <li>1 min product</li>
                  <li>500 voucher</li>
                  <li>20% discount card</li>
                  <li>IR Availiable</li>
                </ul>
              </div>
              <div className={styles.btn}>Get Started</div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.box_title}>
              <h4>Basic</h4>
              <p className={styles.popular}>popular</p>
            </div>

            <div className={styles.money}>
              <div className={styles.first}>
                $7.99<span>/month</span>
              </div>
              <div className={styles.second}>Billed as $96 per year</div>
              <div className={styles.ul}>
                <ul>
                  <li>22 Points</li>
                  <li>2 min months</li>
                  <li>1 min product</li>
                  <li>500 voucher</li>
                  <li>20% discount card</li>
                  <li>IR Availiable</li>
                </ul>
              </div>
              <div className={styles.btn}>Get Started</div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default HealthPackages;
