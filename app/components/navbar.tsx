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
  const [menuPosition, setMenuPosition] = useState<HTMLElement | null>(null);
  const open = Boolean(menuPosition);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleResize = useCallback(() => {
    setIsMobile(window?.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <img src="/logo.png" alt="nusamarin" />
        </div>
        <div className={classes.burger} onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu />
        </div>
        <ul
          className={`${classes["nav-links"]} ${
            isOpen ? classes["nav-active"] : ""
          }`}
        >
          <li>
            <Link className={classes.a} to="/about">
              About Us
            </Link>
          </li>
          <li>
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
                      >
                        {item}
                      </a>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
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
          <li>
            <a href="#">For business</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>

        <div className={classes.cta}>
          <img
            src="/deliver-quality.png"
            alt=""
            className={classes["tag-line"]}
          />
        </div>

        {/* <div className={classes.toolbar}>
          <div
            className={classes.toggle}
            ref={menuRef}
            onClick={handleMenuClick}
          >
            <SiGoogletranslate style={{ color: "#4285F4", fontSize: "28px" }} />
            Translate
            <MdExpandMore />
          </div>
        </div>
        <MenuLanguage
          open={open}
          anchorEl={menuPosition}
          onClose={handleClose}
        /> */}
      </nav>
    </>
  );
};

export default Navbar;
