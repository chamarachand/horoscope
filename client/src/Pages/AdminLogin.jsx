import React from "react";
import styles from "./AdminLogin.module.css";

export const AdminLogin = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.windowContainer}>
        <div className={styles.introContainer}>
          <h1>Astro Visionary Admin Portal</h1>
          <img
            src="login-horoscope.png"
            alt="vector of a person with a laptop"
          />
        </div>
        <div className={styles.loginContainer}>
          <form action="">
            <div className={styles.welcomeText}>
              <h2>Welcome Back!</h2>
              <h2>Login to your Account</h2>
            </div>

            <div className={styles.field}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Username" />
              <p className={styles.error}>{}</p>
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
              <p className={styles.error}>{}</p>
            </div>
            <button className={styles.loginBtn}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};