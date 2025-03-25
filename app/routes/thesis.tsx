import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import classes from "../styles/pages/thesis.module.scss";
import Hero from "~/components/thesis/hero";
import Philosophy from "~/components/thesis/philosophy";
import Goals from "~/components/thesis/goals";
import Program from "~/components/thesis/program";

const Thesis = () => {

  const element = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: element,
      offset: ["start 80%", "start center"],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  return (
    <div className={classes.main} >
      <Hero />
      <motion.div className={classes.wrapper}  ref={element} style={{ opacity }}>
      <Philosophy />
      <Goals />
      </motion.div>
      <Program/>
      
    </div>
  );
};

export default Thesis;
