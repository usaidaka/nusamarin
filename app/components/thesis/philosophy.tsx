import React, { useEffect, useRef } from "react";
import classes from "../../styles/components/thesis/philosophy.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";

const heading = "Our philosophy";
const text = (
  <>
    Our philosophy is embedded in our name.{" "}
    <mark style={{ backgroundColor: "#d99f00" }}>
      "nusa" means "island" "marin" refers to "marine"
    </mark>
    , meaning "related to the sea". It's primarily used in Indonesian, where it
    is derived from Sanskrit Language and refers to islands, often associated
    with the Indonesian homeland ("tanah air"), while "marin" refers to
    "marine," meaning "related to the sea". Our identity is deeply rooted in our
    origins—the archipelago region where natural resources from both land and
    sea are abundant, offering immense opportunities for prosperity. We were
    born in the archipelago region, where natural resources are abundant in the
    land and the sea that can bring great prosperity for the people around it.
  </>
);

const Philosophy = () => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <p className={classes.head}>{heading}</p>
      </div>
      <div className={classes.text}>
        <p className={classes.desc}>{text}</p>
      </div>
    </div>
  );
};

export default Philosophy;
