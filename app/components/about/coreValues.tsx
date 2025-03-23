import React from "react";
import classes from "../../styles/components/about/coreValues.module.scss";
import { MdPeople } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { GiWaterRecycling } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa6";

const CoreValues = () => {
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Core Values</h1>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <div className={classes.visionWrapper}>
            <div className={classes.vision}>
              <FaLightbulb />
              <h3>Innovation</h3>
            </div>
            <p>We champion creative thinking and cutting-edge solutions.</p>
          </div>

          <div className={classes.visionWrapper}>
            <div className={classes.vision}>
              <MdPeople />
              <h3>Collaboration</h3>
            </div>
            <p>
              We foster partnerships among local communities, global experts,
              and industry leaders.
            </p>
          </div>

          <div className={classes.visionWrapper}>
            <div className={classes.vision}>
              <FaHandshakeSimple />
              <h3>Integrity</h3>
            </div>
            <p>
              We uphold the highest ethical standards in every aspect of our
              work. Sustainability: We commit to environmental stewardship and
              responsible
            </p>
          </div>

          <div className={classes.visionWrapper}>
            <div className={classes.vision}>
              <GiWaterRecycling />
              <h3>Sustainability</h3>
            </div>
            <p>
              We commit to environmental stewardship and responsible resource
              management.
            </p>
          </div>

          <div className={classes.visionWrapper}>
            <div className={classes.vision}>
              <FaPeopleArrows />
              <h3>Impact</h3>
            </div>
            <p>
              We measure success by the long-term benefits we bring to people,
              ecosystems, and economies.
            </p>
          </div>
        </div>
        <div className={classes.image}>
          <div className={classes.bgLayer} />
          <img src="/coreValues.jpg" alt="Cleaning the Ocean" />
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
