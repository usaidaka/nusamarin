import React, { useEffect, useState } from "react";
import classes from "../../styles/components/blogs/hero.module.scss";

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
        src="/blogs.jpg"
        alt=""
        style={{ transform: `translateY(${offsetY}px)` }}
        className={classes.background}
      />
      <div className={classes.content}>
        <h1>Blog</h1>
      </div>
    </div>
  );
};

export default Hero;
