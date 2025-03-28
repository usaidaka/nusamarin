import React, { useState, useEffect, useCallback, useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";
import { useLocation } from "react-router";
import classes from "../styles/components/navbar.module.scss";

const Navbar = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true); // Mencegah navbar terbuka di render awal

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Ubah menjadi null agar tidak terjadi flicker

  const handleResize = useCallback(() => {
    setIsMobile(window.matchMedia("(max-width: 1198px)").matches);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setIsOpen(false); // Pastikan navbar tertutup saat pertama kali load
    }
  }, []);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  if (isMobile === null) return null; // Hindari merender navbar sebelum state `isMobile` ditentukan

  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.logo}>
        <img src="/logo.png" alt="nusamarin" />
      </Link>
      <div className={classes.burger} onClick={toggleNavbar}>
        <RxHamburgerMenu />
      </div>
      <ul
        className={`${classes["nav-links"]} ${
          isOpen
            ? classes["nav-active"]
            : !isMobile
            ? classes["nav-active"]
            : ""
        }`}
        aria-expanded={isOpen}
      >
        <li onClick={() => setIsOpen(false)}>
          <Link
            className={`${classes.a} ${
              pathname === "/about" ? classes.active : ""
            }`}
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link
            className={`${classes.a} ${
              pathname === "/thesis" ? classes.active : ""
            }`}
            to="/thesis"
          >
            Our Thesis
          </Link>
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
                <Link to="/solution" onClick={() => setIsOpen(false)}>
                  Solutions
                </Link>
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
                  {
                    id: 1,
                    subMenu: "Sustainable Nutrient-Rich Food Resource",
                    redirect: "/solution/sustainable",
                  },
                  {
                    id: 2,
                    subMenu: "Offsetting Global Carbon Footprints",
                    redirect: "/solution/carbon",
                  },
                  {
                    id: 3,
                    subMenu: "Renewable Energy For Coastal Communities",
                    redirect: "/solution/energy",
                  },
                  {
                    id: 4,
                    subMenu: "Remarkable Tourism Escape",
                    redirect: "/solution/tourism",
                  },
                ].map((item) => (
                  <Link
                    key={item.id}
                    to={item.redirect}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.subMenu}
                  </Link>
                ))}
              </AccordionDetails>
            </Accordion>
          ) : (
            <li className={`${classes.dropdown} `}>
              <Link
                to=""
                className={`${classes["nav-item"]} ${classes.a} ${
                  pathname.includes("/solution") ? classes.active : ""
                }`}
              >
                Solutions
                <MdExpandMore style={{ color: "orange", fontWeight: "bold" }} />
              </Link>
              <div className={classes["dropdown-menu"]}>
                {[
                  {
                    menu: "Sustainable Nutrient-Rich Food Resource",
                    src: "/sustainability.png",
                    redirect: "/solution/sustainable",
                  },
                  {
                    menu: "Offsetting Global Carbon Footprints",
                    src: "/globalCarbon.png",
                    redirect: "/solution/carbon",
                  },
                  {
                    menu: "Renewable Energy For Coastal Communities",
                    src: "/renewableEnergy.png",
                    redirect: "/solution/energy",
                  },
                  {
                    menu: "Remarkable Tourism Escape",
                    src: "/tourismEscape.png",
                    redirect: "/solution/tourism",
                  },
                ].map((item) => (
                  <div className={classes.menu} key={item.menu}>
                    <img src={item.src} alt={item.menu} />
                    <Link to={item.redirect}>{item.menu}</Link>
                  </div>
                ))}
              </div>
            </li>
          )}
        </div>
        <li onClick={() => setIsOpen(false)}>
          <Link
            className={`${classes.a} ${
              pathname === "/sustainability" ? classes.active : ""
            }`}
            to="/sustainability"
          >
            Sustainability
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link
            className={`${classes.a} ${
              pathname === "/blogs" ? classes.active : ""
            }`}
            to="/blogs"
          >
            Blog
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link
            className={`${classes.a} ${
              pathname === "/contact" ? classes.active : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>
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
  );
};

export default Navbar;
