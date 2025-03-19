import React from "react";
import classes from "../../styles/components/home/goals.module.scss";

const goals = [
  {
    id: 1,
    title: "Better nutrient-rich food resources for all",
    src: "/goals1.png",
  },
  {
    id: 2,
    title: "Better destinations for sustainable tourism escape",
    src: "/goals2.png",
  },
  {
    id: 3,
    title: "Better carbon capture & storage for global carbon footprint",
    src: "/goals3.png",
  },
  {
    id: 4,
    title: "Better energy resources from solar-powered infrastructure",
    src: "/goals4.png",
  },
  {
    id: 5,
    title: "Better sustainable investment for global funds",
    src: "/goals5.png",
  },
  {
    id: 6,
    title: "Better place for coastal communities & livelihoods",
    src: "/goals6.png",
  },
];

const Goals = () => {
  return (
    <div className={classes.main}>
      <h1>Our 6 Goals for Sustainable Coastal Development</h1>
      <div className={classes.cardWrapper}>
        {goals.map((goal) => (
          <div key={goal.id} className={classes.card}>
            <img src={goal.src} alt={goal.title} />
            <p>{goal.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
