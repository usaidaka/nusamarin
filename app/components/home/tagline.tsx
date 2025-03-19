import React from "react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import classes from "../../styles/components/home/tagline.module.scss";

export default function Tagline() {
  return (
    <div className={classes.main}>
      <div className={classes.overlay} />
      <div className={classes.container}>
        {tagline.map(({ icon, caption }, i) => (
          <Card key={i} icon={icon} caption={caption} index={i} />
        ))}
      </div>
      <div className={classes.tagline}>
        <h1>
          The Spirit That <br /> Drives Us
        </h1>
      </div>
    </div>
  );
}

interface CardProps {
  icon: string;
  caption: string;
  index: number;
}

const tagline = [
  {
    icon: "🌍",
    caption:
      "Cultivating a sustainable business in the blue frontier ecosystem",
  },
  {
    icon: "💰",
    caption:
      "To deploy a sustainable way to monetize coastal ecosystem for local prosperity",
  },
  {
    icon: "🌿",
    caption:
      "Contribute to heal the earth climate from the blue frontier ecosystem",
  },
  {
    icon: "🌊",
    caption:
      "Capitalize the blue frontier opportunity for local prosperity, sustainably.",
  },
  {
    icon: "⚡",
    caption:
      "To make coastal blue economy as a sustainable solution for global food, energy, and human resources",
  },
];

const Card = ({ icon, caption, index }: CardProps) => {
  return (
    <motion.div
      className={`${classes.cardContainer} card-container-${index}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <motion.div variants={cardVariants} className={classes.card}>
        <span style={iconStyle}>{icon}</span>
        <p style={captionStyle}>{caption}</p>
      </motion.div>
    </motion.div>
  );
};

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

/**
 * ==============   Styles   ================
 */

const cardContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const iconStyle: React.CSSProperties = {
  fontSize: "48px",
  marginBottom: "10px",
};

const captionStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "500",
  color: "white",
};
