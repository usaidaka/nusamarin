import React from "react";
import classes from "../styles/pages/contact.module.scss";
import Hero from "~/components/contact/hero";
import Form from "~/components/contact/form";

const Contact = () => {
  return (
    <div className={classes.main}>
      <Hero />
      <Form />
    </div>
  );
};

export default Contact;
