import React, { useState, useEffect, useCallback, useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
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
        <div className={classes.logo}>Aquatic Direct</div>
        <div className={classes.burger} onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu />
        </div>
        <ul
          className={`${classes["nav-links"]} ${
            isOpen ? classes["nav-active"] : ""
          }`}
        >
          <li>
            <a href="#">About us</a>
          </li>
          <div suppressHydrationWarning>
            {isMobile ? (
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
                  Newsroom
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    paddingLeft: "30px",
                  }}
                >
                  {["BLOG", "CUSTOMER STORIES", "IN THE PRESS"].map((item) => (
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
            ) : (
              <li className={classes.dropdown}>
                <a href="#" className={classes["nav-item"]}>
                  Newsroom ▾
                </a>
                <div className={classes["dropdown-menu"]}>
                  {["BLOG", "CUSTOMER STORIES", "IN THE PRESS"].map((item) => (
                    <div key={item}>
                      <a href="#">{item}</a>
                      <p>Informasi terkait {item.toLowerCase()}.</p>
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
        <div />
        {/* <div className={classes.cta}>
        <div className={classes.toolbar}>
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
        />
      </div> */}
      </nav>
    </>
  );
};

export default Navbar;
