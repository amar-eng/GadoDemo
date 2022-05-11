import React from "react";
import { useForm } from "react-hook-form";
import "../styles/ContactForm.scss";
import "../styles/Select.scss";
import { downn } from "../utils/Lists";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="list-choice">
          <div className="list-choice-title">
            <h3 className="list-choice-header">Firstly, you are a </h3>

            <img src={downn} alt="down" className="list-choice-title-img" />
          </div>
          <div className="list-choice-objects">
            <label>
              <input
                type="radio"
                name="title"
                value="customer"
                {...register("title", { required: true })}
              />
              <span>Customer</span>
            </label>
            <label>
              <input
                type="radio"
                name="title"
                value="Dropshipper"
                {...register("title", { required: true })}
              />
              <span>Drop-shipper</span>
            </label>
            <label>
              <input
                type="radio"
                name="title"
                value="Supplier"
                {...register("title", { required: true })}
              />
              <span>Supplier</span>
            </label>
          </div>
        </div>
      <div className="form__group">
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullname", { required: true })}
          className="form__input"
        />
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
          className="form__input"
        />
        <input
          type="number"
          placeholder="Phone Number"
          {...register("number", { valueAsNumber: true, required: true })}
          className="form__input"
        />
        <input
          type="text"
          placeholder="Your City, Country"
          {...register("location", { required: true })}
          className="form__input"
        />
      </div>
      <div className="form__message">
        <textarea
          placeholder="How can we help you?"
          {...register("message", { required: true })}
          className="form__textarea"
        />
      </div>

      <div className="form__selects">
        <div className="list-choice">
          <div className="list-choice-title">
            <h3 className="list-choice-header">How did you hear about us? </h3>
            <img src={downn} alt="down" className="list-choice-title-img" />
          </div>
          <div className="list-choice-objects">
            <label>
              <input
                type="radio"
                name="source"
                value="wordofmouth"
                {...register("source", { required: true })}
              />
              <span>Word of mouth</span>
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="instagram"
                {...register("source", { required: true })}
              />
              <span>Instagram</span>
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="twitter"
                {...register("source", { required: true })}
              />
              <span>Twitter</span>
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="facebook"
                {...register("source", { required: true })}
              />
              <span>Facebook</span>
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="tiktok"
                {...register("source", { required: true })}
              />
              <span>Tiktok</span>
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="LinkedIn"
                {...register("source", { required: true })}
              />
              <span>LinkedIn</span>
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="MarketingAd"
                {...register("source", { required: true })}
              />
              <span>Marketing Ad</span>
            </label>
          </div>
        </div>
        
   
      </div>

      <div className="form__buttons">
        <input type="submit" className="form__button" />
      </div>
    </form>
  );
};

export default ContactForm;
