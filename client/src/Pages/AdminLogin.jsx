import React, { useState } from "react";
import styles from "../styles/AdminLogin.module.css";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const AdminLogin = () => {
  const [isLogging, setIsLogging] = useState(false);
  const [loginError, setLogInError] = useState("");

  const schema = yup.object().shape({
    username: yup.string().required().min(5).max(20),
    password: yup.string().required().min(5).max(128),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsLogging(true);

    const admin = {
      username: data.username,
      password: data.password,
    };

    Axios.post("http://localhost:3000/auth", admin)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.reload(); // Look for better approach if possible
      })
      .catch((error) => {
        console.log("An error occured", error);
        if (error.response.status === 400 || error.response.status === 500)
          setLogInError(error.response.data.error);
        else setLogInError("An unknown error occured");
      })
      .finally(() => setIsLogging(false));
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.welcomeText}>
              <h2>Welcome Admin!</h2>
              <p>Login to your Account</p>
            </div>

            <p className={styles.loginError}>{loginError}</p>

            <div className={styles.field}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                {...register("username")}
              />
              <p className={styles.error}>{errors.username?.message}</p>
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                {...register("password")}
              />
              <p className={styles.error}>{errors.password?.message}</p>
            </div>

            <button className={styles.btn} disabled={isLogging}>
              {isLogging ? "Logging in" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
