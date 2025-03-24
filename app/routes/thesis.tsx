import React from "react";
import classes from "../styles/pages/thesis.module.scss";
import Hero from "~/components/thesis/hero";
import Philosophy from "~/components/thesis/philosophy";
import Goals from "~/components/thesis/goals";

const Thesis = () => {
  return (
    <div className={classes.main}>
      <Hero />
      <Philosophy />
      <Goals />
    </div>
  );
};

export default Thesis;
