import React from "react";
import classes from "../styles/pages/about.module.scss";
import Hero from "~/components/about/hero";
import CoreValues from "../components/about/coreValues";
import Vision from "~/components/about/vision";

const About = () => {
  return (
    <div className={classes.main}>
      <Hero />
      <CoreValues />
      <Vision />
    </div>
  );
};

export default About;
