import React from "react";
import classes from "../../styles/pages/solution.module.scss";
import { Link } from "react-router";

const Solution = () => {
  return (
    <div className={classes.main}>
      <div className={classes.overlay} />
      <video
        autoPlay
        muted
        loop
        className={classes.background}
        src="/solution.mp4"
      />
      <div className={classes.content}>
        <h1>Innovating for a Sustainable Future in Coastal Economies</h1>
        <h2>
          At <strong>NUSAMARIN</strong>, we believe that the future of our
          oceans holds the key to solving some of the world’s most pressing
          challenges. Through innovation, investment, and collaboration, we
          develop solutions that create sustainable growth while benefiting
          local communities and preserving marine ecosystems. Our four flagship
          solutions drive impact in critical sectors: food security, climate
          action, renewable energy, and responsible tourism.
        </h2>
        <div className={classes.wrapper}>
          <Link className={classes.cta} to="/solution/sustainable">
            Sustainable Nutrient-Rich Food Resources
          </Link>
          <Link className={classes.cta} to="/solution/carbon">
            Offsetting Global Carbon Footprints
          </Link>
          <Link className={classes.cta} to="/solution/energy">
            Renewable Energy for Coastal Communities
          </Link>
          <Link className={classes.cta} to="/solution/tourism">
            Remarkable Tourism Escape
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solution;
