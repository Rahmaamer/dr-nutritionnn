import { Link, NavLink } from "react-router-dom";
// css
import styles from "./sign.module.css";
// imgs
import sign_in_bg from "../../data/imgs/sign in bg.jpg";
import google from "../../data/imgs/google.svg";
import facebook from "../../data/imgs/Facebook.png";
import apple from "../../data/imgs/apple.svg";

function Second_sign_up() {
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
              <NavLink to="/sign_up" className={styles.link}>
                1
              </NavLink>

              <NavLink
                style={{ background: "#95c84a", opacity: "1" }}
                to="/second_sign_up"
                className={styles.link}
              >
                2
              </NavLink>
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

            <form action="">
              <label htmlFor="NationalID">National ID</label>
              <input
                className={styles.input}
                type="number"
                id="NationalID"
                placeholder="National ID"
              />
              <label htmlFor="PhoneNumber">Phone number</label>
              <input
                className={styles.input}
                type="number"
                id="PhoneNumber"
                placeholder="Phone number"
              />

              <div className={styles.sign_up_inputs}>
                <div>
                  <label htmlFor="Weight">Weight</label>
                  <input type="number" placeholder="Weight" id="Weight" />

                  <label htmlFor="Gender">Gender</label>
                  <input type="gender" placeholder="Gender" id="Gender" />
                </div>
                <div>
                  <label htmlFor="Height">Height</label>
                  <input type="number" placeholder="Height" id="Height" />
                  <label htmlFor="Date of birth">Date of birth</label>
                  <input
                    type="date"
                    placeholder="Date of birth"
                    id="Date of birth"
                  />
                </div>
              </div>
              <Link className={styles.forgot_btn}>Forgot Password</Link>
              <button className={styles.sign_btn}>sign in</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Second_sign_up;
