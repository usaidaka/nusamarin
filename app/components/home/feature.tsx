import React, { useState, useEffect } from "react";
import classes from "../../styles/components/home/feature.module.scss";

const Feature = () => {
  return (
    <div className={classes.main}>
      <div className={classes.overlay} />
      <div className={classes["first-feature"]}>
        <div className={classes.image}>
          <img src="/logo.png" alt="" />
        </div>
        <div className={classes.description}>
          <h1 suppressHydrationWarning>Our Company</h1>
          <h3 suppressHydrationWarning>
            NUSAMARIN is a holding company integrating Southeast Asia’s coastal
            blue economy by cultivating, consolidating, and optimizing tropical
            resources. We aim for sustainable monetization to boost local
            prosperity. To accelerate this vision, we seek global investment in
            blue ocean opportunities, ensuring both profitability and climate
            impact.
          </h3>
        </div>
      </div>

      <div className={classes["second-feature"]}>
        <div className={classes.image} />
        <div className={classes.description}>
          <h1>Our philosophy</h1>
          <h3 suppressHydrationWarning>
            Our name reflects our philosophy. “Nusa,” from Indonesian and
            Sanskrit, means “island,” often linked to the homeland (“tanah
            air”), while “Marin” refers to the sea. Rooted in the archipelago,
            we embrace the abundant land and marine resources that offer vast
            opportunities for prosperity.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;
