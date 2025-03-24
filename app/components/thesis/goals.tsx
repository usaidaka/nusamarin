import React from "react";
import classes from "../../styles/components/thesis/goals.module.scss";
import { motion } from "framer-motion";

const points = [
  "Better nutrient-rich food resources for all",
  "Better destinations for sustainable tourism escape",
  "Better carbon capture & storage for global carbon footprint",
  "Better energy resources from solar-powered infrastructure",
  "Better sustainable investment for global funds",
  "Better place for coastal communities & livelihoods",
];

const Goals = () => {
  return (
    <div className={classes.container}>
      <div className={classes.circle}>
        <div className={classes.centerText}>
          <h2>Our Goal</h2>
          <p>Coastal areas to be a better place for all</p>
        </div>
        {points.map((point, index) => (
          <motion.div
            key={index}
            className={`${classes.point} ${classes[`point${index + 1}`]}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span className={classes.number}>{index + 1}</span>
            <p>{point}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
