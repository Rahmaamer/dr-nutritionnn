import { Link, NavLink } from "react-router-dom";
// css
import styles from "./sign.module.css";
// imgs

// imgs
import sign_in_bg from "../../data/imgs/sign in bg.jpg";
import google from "../../data/imgs/google.svg";
import facebook from "../../data/imgs/Facebook.png";
import apple from "../../data/imgs/apple.svg";
function Sign_up() {
  return (
    <>
      <main className={styles.main}>
        {/* left section */}
        <div className={styles.main_bg}>
          <img src={sign_in_bg} alt="" />
        </div>
        {/* right section */}
        <div className={styles.sign_in}>
          <div className={styles.container}>
            <div className={styles.sign_up_steps}>
              <Link to="/sign_up" className={styles.link}>
                1
              </Link>

              <Link to="/second_sign_up" className={styles.link}>
                2
              </Link>
            </div>
            <div className={styles.container_title}>
              <h2>
                Welcome to
                <span className="special_text2">DrNurtionin</span>
              </h2>
              <div>
                <p>Have an Account ?</p>
                <Link to="/" className="link special_text2">
                  Sign in
                </Link>
              </div>
            </div>
            <h1>Sign up</h1>
            <div className={styles.different_ways}>
              <span className={styles.google}>
                <img src={google} alt="" /> Sign in with Google
              </span>
              <span>
                <img src={facebook} alt="" />
              </span>
              <span>
                <img src={apple} alt="" />
              </span>
            </div>
            <form action="">
              <div className={styles.sign_up_inputs}>
                <div>
                  <label htmlFor="first_name">first name</label>
                  <input type="text" placeholder="First Name" id="first_name" />
                </div>
                <div>
                  <label htmlFor="last_name">Last name</label>
                  <input type="text" placeholder="Last Name" id="last_name" />
                </div>
              </div>
              <label htmlFor="first">Enter your email address</label>
              <input
                className={styles.input}
                type="text"
                id="first"
                placeholder="email address"
              />
              <label htmlFor="second">Enter your Password</label>
              <input
                className={styles.input}
                type="text"
                id="second"
                placeholder="Password"
              />
              <Link to="/second_sign_up" className={styles.forgot_btn}>
                Forgot Password
              </Link>
              <button className={styles.sign_btn}>
                <Link to="/second_sign_up" className="link">
                  continue
                </Link>
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sign_up;
