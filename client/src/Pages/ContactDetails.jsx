import { useForm } from "react-hook-form";
import "./ContactDetails.css";

export const ContactDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {};

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content">
          <h1>Enter your contact details</h1>
          <div className="user-input">
            <label htmlFor="phone-no">
              Telephone Number (ජංගම දුරකතන අංකය)
            </label>
            <input type="tel" id="phone-no" placeholder="Phone no" />
          </div>

          <div className="user-input">
            <label htmlFor="whatsapp-number">
              Whatsapp number (වට්ස්ඇප් අංකය )
            </label>
            <input type="tel" id="whatsapp-number" placeholder="Whatsapp no" />
          </div>

          <div className="user-input">
            <label htmlFor="email">Email (විද්‍යුත් තැපැල් ලිපිනය )</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="buttons">
            <button>Back</button>
            <button>Continue</button>
          </div>
        </div>
      </form>
    </div>
  );
};
