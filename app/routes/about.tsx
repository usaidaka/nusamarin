import React from "react";
import classes from "../styles/pages/about.module.scss";
import Hero from "~/components/about/hero";

const About = () => {
  return (
    <div className={classes.main}>
      <Hero />
    </div>
  );
};

export default About;
