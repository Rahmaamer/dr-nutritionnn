// react
import { Link, NavLink } from "react-router-dom";
// logo
import logo from "../../data/imgs/logo.png";
// styles
import styles from "./nav.module.css";
// font awesome
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
  faPhone,
  faHeart,
  
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faSquareInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Favorite from "../../pages/favorite/Favorite";

function Nav() {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contact_icons}>
            <span className={styles.icon}>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>97142040760</span>
            </span>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
              customerservice@drnutrition.com
            </span>
          </div>

          <h2> Follow Us and get a chance to win 80% off</h2>
          <div className={styles.follow}>
            <span> Follow Us : </span>
            <div className={styles.follow_icons}>
              <a>
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* nav */}
      <div className={styles.nav}>
        <div className={styles.nav_links}>
          <div className={styles.image}>
            <img src={logo} alt="" />
          </div>

          <ul>
            <NavLink
              to={"/"}
          
              className={styles.link}
            >
              Home
            </NavLink>
            <NavLink to={"/"} className={styles.link}>
              Offers & Stacks
            </NavLink>
            <NavLink to={"/health_packeges"} className={styles.link}>
              Health Packages
            </NavLink>
            <NavLink to={"/payment"} className={styles.link}>
              Stores
            </NavLink>
            <NavLink to={"/fit"} className={styles.link}>
              Blog
            </NavLink>
            <NavLink to={"/bmi"} className={styles.link}>
              BMI Caluculator
            </NavLink>
            <NavLink to={"/edit"} className={styles.link}>
              Book Appointment
            </NavLink>
          </ul>
          <div className={styles.icons}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>

            <span className={styles.icon}>
              <FontAwesomeIcon icon={faBagShopping} />
              <span>30</span>
            </span>
            <span className={styles.icon} >
           <Link to={'/favorite'}>
           <FontAwesomeIcon icon={faHeart} style={{color:'black' }} />
            </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
