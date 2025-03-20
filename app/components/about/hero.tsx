import React from "react";
import classes from "../../styles/components/about/hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay} />
      <img src="/about.jpg" alt="" className={classes.background} />
      <div className={classes.content}>
        <h1>
          Empowering Coastal Communities through Sustainable Venture Building
        </h1>
        <h2>
          We support coastal communities in thriving by building sustainable
          ventures that enhance their quality of life.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
