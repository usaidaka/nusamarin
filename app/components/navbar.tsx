import React, { useState, useEffect, useCallback, useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";
import { SiGoogletranslate } from "react-icons/si";
import classes from "../styles/components/navbar.module.scss";
import MenuLanguage from "./menuLanguage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window?.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      <nav className={classes.navbar}>
        <Link to="/" className={classes.logo}>
          <img src="/logo.png" alt="nusamarin" />
        </Link>
        <div className={classes.burger} onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu />
        </div>
        <ul
          className={`${classes["nav-links"]} ${
            isOpen ? classes["nav-active"] : ""
          }`}
          aria-expanded={isOpen}
        >
          <li>
            <Link
              className={classes.a}
              to="/about"
              onClick={() => setIsOpen(!isOpen)}
            >
              About Us
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <a href="#">Our thesis</a>
          </li>
          <div suppressHydrationWarning>
            {isMobile ? (
              <>
                <Accordion
                  sx={{
                    width: "100%",
                    background: "none",
                    color: "white",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<MdExpandMore style={{ color: "orange" }} />}
                  >
                    Solutions
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      paddingLeft: "30px",
                    }}
                  >
                    {[
                      "Sustainable Nutrient-Rich Food Resource",
                      "Offsetting Global Carbon Footprints",
                      "Renewable Energy For Coastal Communities",
                      "Remarkable Tourism Escape",
                    ].map((item) => (
                      <a
                        key={item}
                        href="#"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {item}
                      </a>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </>
            ) : (
              <li className={classes.dropdown}>
                <a href="#" className={classes["nav-item"]}>
                  Solutions
                  <MdExpandMore
                    style={{ color: "orange", fontWeight: "bold" }}
                  />
                </a>
                <div className={classes["dropdown-menu"]}>
                  {[
                    {
                      menu: "Sustainable Nutrient-Rich Food Resource",
                      src: "/sustainability.png",
                    },
                    {
                      menu: "Offsetting Global Carbon Footprints",
                      src: "/globalCarbon.png",
                    },
                    {
                      menu: "Renewable Energy For Coastal Communities",
                      src: "/renewableEnergy.png",
                    },
                    {
                      menu: "Remarkable Tourism Escape",
                      src: "/tourismEscape.png",
                    },
                  ].map((item) => (
                    <div className={classes.menu} key={item.menu}>
                      <img src={item.src} alt={item.menu} />
                      <a href="#">{item.menu}</a>
                    </div>
                  ))}
                </div>
              </li>
            )}
          </div>
          <li onClick={() => (isMobile ? setIsOpen(!isOpen) : "")}>
            <a href="#">Sustainability</a>
          </li>
          <li onClick={() => (isMobile ? setIsOpen(!isOpen) : "")}>
            <a href="#">Blog</a>
          </li>
          <li onClick={() => (isMobile ? setIsOpen(!isOpen) : "")}>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className={classes.cta}>
          <img
            src="/deliver-quality.png"
            alt=""
            className={classes["tag-line"]}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
