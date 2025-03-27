import React from "react";
import classes from "../../styles/components/thesis/conclusion.module.scss";

const Conclusion = () => {
  return (
    <div className={classes.main}>
      <div className={classes.overlay} />
      <img src="/conclusion.jpg" alt="" className={classes.background} />
      <div className={classes.content}>
        <h1>Investing in a Sustainable Blue Economy</h1>
        <h2>
          At <strong>NUSAMARIN</strong>, we believe that sustainability and
          profitability can go hand in hand. Through strategic investments,
          innovation, and responsible resource management, we are unlocking the
          true potential of coastal economies while ensuring a healthier planet
          for future generations
        </h2>
        <div className={classes.ctaText}>
          <p>
            🌊 Join us in transforming the future of marine-based economies.
          </p>
          <p>
            📩 Get in touch to explore investment and partnership opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
