import classes from "../../styles/components/about/vision.module.scss";

const Vision = () => {
  return (
    <main className={classes.main}>
      <Section1 />
      <Section2 />
    </main>
  );
};

const Section1 = () => {
  return (
    <div className={classes["first-section"]}>
      <div className={classes["main-wrapper"]}>
        <div className={classes.vision}>
          <h1>NUSAMARIN's Vision</h1>
          <p>
            <strong>NUSAMARIN</strong> aims to become the leading integrator
            capital company, driving global investment into coastal economies.
            We envision a long-term growth strategy focused on empowering
            Southeast Asia’s coastal communities through sustainable,
            tech-enabled, and carbon-neutral business models.
          </p>
        </div>
        <div className={classes.mission}>
          <div className={classes["mission-wrapper"]}>
            <img src="/coastal-village.png" alt="" />
            <p className={classes.text}>
              Building consolidation infrastructure for coastal natural
              resources.
            </p>
          </div>
          <div className={classes["mission-wrapper"]}>
            <img src="/value-chain.png" alt="" />
            <p className={classes.text}>
              Strengthening industry positioning in the global value chain.
            </p>
          </div>
          <div className={classes["mission-wrapper"]}>
            <img src="/planet-earth.png" alt="" />
            <p className={classes.text}>
              Promoting sustainability across the entire supply chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className={classes["second-section"]}>
      <div className={classes["main-wrapper"]}>
        <div className={classes.text}>
          <p>
            At <strong>NUSAMARIN</strong>, we believe that{" "}
            <mark style={{ background: "#eaa507" }}>
              integrating sustainability, technology, and supply chain
            </mark>{" "}
            <i>
              is key to unlocking the full potential of coastal natural
              resources while ensuring coastal communities thrive
            </i>
            . Anyone who joins us on this journey will not only be part of a
            high-growth industry but also contribute to a more sustainable and
            prosperous future for the region. The seafood sector is undergoing a
            pivotal transformation, and <strong>NUSAMARIN</strong>{" "}
            <span
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "8px",
              }}
            >
              is at the forefront of this change—leading the charge to create a
              resilient and globally competitive industry that balances economic
              success with environmental responsibility.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
