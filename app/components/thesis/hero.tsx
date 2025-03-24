import React, { useEffect, useState } from "react";
import classes from "../../styles/components/thesis/hero.module.scss";

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
      <img src="/thesis.jpg" alt="" style={{ transform: `translateY(${offsetY}px)` }} className={classes.background} />
      <div className={classes.content}>
        <h1>
        Nusamarin Blue Belt Initiatives
        </h1>
        <h2>
        "Building a Sustainable & Resilient Coastal Economy through Impact-Driven Investments"
        </h2>
        <p>At <strong>NUSAMARIN</strong>, we believe that the blue economy is a key driver for sustainable development, food security, carbon neutrality, and energy transformation. Our thesis is built upon strategic investments that maximize economic returns while safeguarding marine ecosystems and empowering coastal communities.
        </p>
      </div>
    </div>
  );
};

export default Hero;
