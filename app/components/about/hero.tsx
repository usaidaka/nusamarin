import React, { useEffect, useState } from "react";
import classes from "../../styles/components/about/hero.module.scss";

const Hero = () => {
    const [offsetY, setOffsetY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setOffsetY(window.scrollY * 0.5);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <div className={classes.hero}>
      <div className={classes.overlay} />
      <img  style={{ transform: `translateY(${offsetY}px)` }} src="/about.jpg" alt="" className={classes.background} />
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
