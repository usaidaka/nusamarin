import React, { useEffect, useState } from "react";
import classes from "../../styles/components/home/hero.module.scss";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5); // Efek parallax (0.5 = lebih lambat)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={classes.hero}>
      <div className={classes.overlay} />
      <video
        autoPlay
        muted
        loop
        className={classes.backgroundVideo}
        src="/backgroundVideo.mp4"
        style={{ transform: `translateY(${offsetY}px)` }}
      />
      <div className={classes.content}>
        <h1>Logo</h1>
        <h1>On a mission to clean the Ocean</h1>
      </div>
    </div>
  );
};

export default Hero;
