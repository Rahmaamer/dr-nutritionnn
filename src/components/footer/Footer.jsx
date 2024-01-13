// style
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
// img
import logo from "../../data/imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles.img}>
            <img src={logo} alt="" />
          </div>
          <div>
            <Link to="/profile" className={styles.link}>
              My Account
            </Link>
            <Link className={styles.link}>Dashboard</Link>
            <Link to={"/"} className={styles.link}>
              Login / register
            </Link>
            <Link className={styles.link}> Orders</Link>
            <Link className={styles.link}>Reviews</Link>
          </div>
          <div>
            <Link className={styles.link}>Orders & Shipping</Link>
            <Link className={styles.link}>FAQ</Link>
            <Link className={styles.link}>Return Policy</Link>
            <Link className={styles.link}> Privacy & Policy</Link>
            <Link className={styles.link}>Terms Of Use</Link>
            <Link className={styles.link}>Original Products</Link>
            <Link className={styles.link}>Shipping & Delivery</Link>
          </div>
          <div>
            <Link className={styles.link}>Top Categories</Link>
            <Link className={styles.link}>Sports Nutrition</Link>
            <Link className={styles.link}>Vitamins & Minerals</Link>
            <Link className={styles.link}> Health & Wellness</Link>
            <Link className={styles.link}>Weight Management</Link>
            <Link className={styles.link}>Keto</Link>
            <Link className={styles.link}>Healthy Foods</Link>
            <Link className={styles.link}>Multivitamins</Link>
            <Link className={styles.link}>Whey Protein</Link>
          </div>
          <div>
            <Link className={styles.link}>Top Brands</Link>
            <Link className={styles.link}>Laperva</Link>
            <Link className={styles.link}>Body Builder</Link>
            <Link className={styles.link}>Applied Nutrition</Link>
            <Link className={styles.link}>Optimum Nutrition</Link>
            <Link className={styles.link}>MuscleTech</Link>
            <Link className={styles.link}>Xtend</Link>
            <Link className={styles.link}>Universal Nutrition</Link>
            <Link className={styles.link}>Cellucor</Link>
          </div>
          <div>
            <Link className={styles.link}>Promotions</Link>
            <Link className={styles.link}>Stacks & Combos</Link>
            <Link className={styles.link}>Clearance</Link>
            <Link className={styles.link}>wholesale</Link>
          </div>
          <div className={styles.contact}>
            <h4>Contact Us</h4>

            <ul>
              <li>
                <a>
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;