import React, { useState } from "react";
import classes from "../../styles/components/contact/form.module.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
    captcha: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value: any) => {
    setFormData({ ...formData, captcha: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.captcha) {
      alert("Harap verifikasi Captcha terlebih dahulu.");
      return;
    }
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className={classes.title}>
        <h1>Contact Us</h1>
        <h1>
          please fill out the form below, and we will get back to you as soon as
          possible
        </h1>
      </div>
      <div className={classes.main}>
        <div className={classes["main-wrapper"]}>
          <div className={classes.address}>
            <img src="/logo.png" alt="nusamarin" />
          </div>
          <div className={classes.form}>
            <div className={classes["contact-container"]}>
              <h2>Send Your Message</h2>
              <form onSubmit={handleSubmit}>
                <div className={classes["form-group"]}>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Input your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={classes["form-group"]}>
                  <label htmlFor="">Institution</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Input you institution"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className={classes["form-section"]}>
                  <div className={classes["form-group"]}>
                    <label htmlFor="">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Input your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                  <div className={classes["form-group"]}>
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Input your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={classes.input}
                    />
                  </div>
                </div>
                <div className={classes["form-group"]}>
                  <label htmlFor="">Message</label>
                  <textarea
                    name="message"
                    placeholder="Write you message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={classes["submit-btn"]}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
