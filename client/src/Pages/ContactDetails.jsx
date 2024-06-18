import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AppContext } from "../App";
import styles from "../styles/ContactDetails.module.css";

export const ContactDetails = () => {
  const { setShowContactDetailsPage } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className={styles.container}
      // style={{
      //   backgroundImage: url(
      //     "../assets/horoscope_background_upscayl_3x_realesrgan-x4plus.jpg"
      //   ),
      //   backgroundSize: cover,
      //   backgroundPosition: center,
      // }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.content}>
          <h1>Enter your contact details</h1>

          <div className={styles.userInput}>
            <label htmlFor="phone-no">
              Telephone Number (ජංගම දුරකතන අංකය)
            </label>
            <input
              type="tel"
              id="phone-no"
              placeholder="Phone no"
              {...register("phoneNo", { required: "Phone number is required" })}
            />
            <p className={styles.error}>{errors.phoneNo?.message}</p>
          </div>

          <div className={styles.userInput}>
            <label htmlFor="whatsapp-number">
              Whatsapp number (වට්ස්ඇප් අංකය )
            </label>
            <input
              type="tel"
              id="whatsapp-number"
              placeholder="Whatsapp no"
              {...register("whatsappNo", {
                required: "Whatsapp number is required",
              })}
            />
            <p className={styles.error}>{errors.whatsappNo?.message}</p>
          </div>

          <div className={styles.userInput}>
            <label htmlFor="email">Email (විද්‍යුත් තැපැල් ලිපිනය )</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            <p className={styles.error}>{errors.email?.message}</p>
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={() => setShowContactDetailsPage(false)}
              className={styles.btn}
            >
              Back
            </button>
            <button type="submit" className={styles.btn}>
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
