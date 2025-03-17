import React from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import classes from "../styles/components/menuLanguage.module.scss";

interface MenuLanguageProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const MenuLanguage: React.FC<MenuLanguageProps> = ({
  open,
  anchorEl,
  onClose,
}) => {
  return (
    <>
      <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
        <MenuItem>
          <div className={classes.menu}>
            <Avatar className={classes.menuAvatar} src="/id.png" />
            <div className={classes.menuLang}>Bahasa Indonesia</div>
          </div>
        </MenuItem>
        <MenuItem>
          <div className={classes.menu}>
            <Avatar className={classes.menuAvatar} src="/en.png" />
            <div className={classes.menuLang}>Bahasa Inggris</div>
          </div>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuLanguage;
