import React, { useEffect, useState } from "react";
import classes from "../../styles/components/contact/hero.module.scss";

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
      <img
        style={{ transform: `translateY(${offsetY}px)` }}
        src="/about.jpg"
        alt=""
        className={classes.background}
      />
    </div>
  );
};

export default Hero;
