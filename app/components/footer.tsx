import React from "react";
import classes from "../styles/components/footer.module.scss";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.logoSection}>
          <div className={classes.logo}>
            {/* <img src="/logo.png" alt="Samudra Logo" /> */}
            <h1>AQUATIC DIRECT</h1>
          </div>
          <p className={classes.tagline}>MEGASCALE SEAWEED CARBON CAPTURE</p>
        </div>

        <div className={classes.nav}>
          <div className={classes.column}>
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/product">PRODUCT</a>
          </div>
          <div className={classes.column}>
            <a href="/projects">PROJECTS</a>
            <a href="/impact">IMPACT</a>
            <a href="/team">TEAM</a>
          </div>
          <div className={classes.column}>
            <a href="/careers">CAREERS</a>
            <a href="/press">PRESS/MEDIA</a>
            <a href="/blog">BLOG</a>
          </div>
        </div>

        <div className={classes.contact}>
          <h3>CONTACT</h3>
          <p>info@samudraoceans.com</p>
          <div className={classes.socialIcons}>
            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>
      </div>

      <div className={classes.footerBottom}>
        <p>© SAMUDRA OCEANS LIMITED. ALL RIGHTS RESERVED.</p>
        <div className={classes.links}>
          <a href="/privacy">PRIVACY POLICY</a>
          <a href="/terms">TERMS OF USE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
