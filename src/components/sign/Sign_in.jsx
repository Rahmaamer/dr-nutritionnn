import { Link } from "react-router-dom";
// css
import styles from "./sign.module.css";

// imgs
import sign_in_bg from "../../data/imgs/sign in bg.jpg";
import google from "../../data/imgs/google.svg";
import facebook from "../../data/imgs/Facebook.png";
import apple from "../../data/imgs/apple.svg";
// hooks
import { useState } from "react";

function Sign_in() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  async function login() {
    let item = (email, password);
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
    });
    result = await result.json();
  }
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
            <div className={styles.container_title}>
              <h2>
                Welcome to
                <span className="special_text">DrNurtionin</span>
              </h2>
              <div>
                <p>No Account ?</p>
                <Link to="/sign_up" className="link special_text">
                  Sign up
                </Link>
              </div>
            </div>
            <h1 onClick={login}>Sign in</h1>
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
              <label htmlFor="first">Enter your email address</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={styles.input}
                type="email"
                id="first"
                placeholder="email address"
              />
              <label htmlFor="second">Enter your Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={styles.input}
                type="password"
                id="second"
                placeholder="Password"
              />
              <Link className={styles.forgot_btn}>Forgot Password</Link>
              <button onClick={login} className={styles.sign_btn}>
                sign in
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sign_in;
