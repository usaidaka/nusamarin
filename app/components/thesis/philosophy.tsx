import React, { useEffect, useRef } from "react";
import classes from "../../styles/components/thesis/philosophy.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";

const heading = "Our philosophy";
const text = (
  <>
    Our philosophy is embedded in our name.{" "}
    <mark>"nusa" means "island" "marin" refers to "marine"</mark>, meaning
    "related to the sea". It's primarily used in Indonesian, where it is derived
    from Sanskrit Language and refers to islands, often associated with the
    Indonesian homeland ("tanah air"), while "marin" refers to "marine," meaning
    "related to the sea". Our identity is deeply rooted in our origins—the
    archipelago region where natural resources from both land and sea are
    abundant, offering immense opportunities for prosperity. We were born in the
    archipelago region, where natural resources are abundant in the land and the
    sea that can bring great prosperity for the people around it.
  </>
);

const Philosophy = () => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 80%", "start center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <motion.p className={classes.head} ref={element} style={{ opacity }}>
          {heading}
        </motion.p>
      </div>
      <div className={classes.text}>
        <motion.p className={classes.desc} ref={element} style={{ opacity }}>
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default Philosophy;
