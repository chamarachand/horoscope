import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useForm } from "react-hook-form";
import { districts, signs } from "../data/data";
import styles from "../styles/DetailsPage.module.css";

function DetailsPage() {
  const { setShowContactDetailsPage } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Axios.post("http://localhost:3000/horoscope/", data)
    //   .then((response) => {
    //     console.log("Data sent successfully");
    //   })
    //   .catch((error) => {
    //     console.log("Error sending data", error);
    //   });

    setShowContactDetailsPage(true);
  };

  return (
    <div className={styles.detailsPage}>
      <div className={styles.wrapper}>
        <h1>Get Your Horoscope Report</h1>

        {Object.keys(errors).length > 0 && (
          <p className="error-message">Please fill out all required fields.</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter your name"
            className={styles.inputText}
          />

          <select
            {...register("sign", { required: true })}
            className={styles.select}
          >
            <option value="" disabled>
              Select Your Sign
            </option>
            {signs.map((sign, index) => (
              <option key={index} value={sign}>
                {sign}
              </option>
            ))}
          </select>

          <select
            {...register("gender", { required: true })}
            className={styles.select}
          >
            <option value="" disabled>
              Select Your Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select
            {...register("birthDistrict", { required: true })}
            className={styles.select}
          >
            <option value="" disabled>
              Select Your Birth District
            </option>
            {districts.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>

          <input
            {...register("birthDate", { required: true })}
            type="date"
            placeholder="Enter Your Birth Date"
            className={styles.inputDate}
          />
          <input
            {...register("birthTime", { required: true })}
            type="time"
            placeholder="Enter Your Birth Time"
            className={styles.inputTime}
          />

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default DetailsPage;
