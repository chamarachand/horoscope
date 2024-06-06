import { useForm } from "react-hook-form";
import "./ContactDetails.css";

export const ContactDetails = () => {
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
      className="container"
      style={{
        backgroundImage: url(
          "../assets/horoscope_background_upscayl_3x_realesrgan-x4plus.jpg"
        ),
        backgroundSize: cover,
        backgroundPosition: center,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content">
          <h1>Enter your contact details</h1>

          <div className="user-input">
            <label htmlFor="phone-no">
              Telephone Number (ජංගම දුරකතන අංකය)
            </label>
            <input
              type="tel"
              id="phone-no"
              placeholder="Phone no"
              {...register("phoneNo", { required: "Phone number is required" })}
            />
            <p className="error">{errors.phoneNo?.message}</p>
          </div>

          <div className="user-input">
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
            <p className="error">{errors.whatsappNo?.message}</p>
          </div>

          <div className="user-input">
            <label htmlFor="email">Email (විද්‍යුත් තැපැල් ලිපිනය )</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            <p className="error">{errors.email?.message}</p>
          </div>

          <div className="buttons">
            <button type="button">Back</button>
            <button type="submit">Continue</button>
          </div>
        </div>
      </form>
    </div>
  );
};
