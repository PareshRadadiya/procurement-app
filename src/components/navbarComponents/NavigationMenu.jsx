import React from "react";
import { Box } from "@mui/material";
import { ImageWarper, MenuItem } from "./StyledNavigationMenu";
import { NavLink } from "react-router-dom";

const NavigationMenu = ({ menuObject, isOpen, setIsOpen }) => {
  return (
    <NavLink style={{ textDecoration: "none" }} to={menuObject.route} key={menuObject.title}>
      {({ isActive }) => (
        <MenuItem
          onClick={() => setIsOpen(!isOpen)}
          aria-hidden="true"
          className={`${isActive && !isOpen && "closedActive"} ${isActive && isOpen && "active"}`}
        >
          <ImageWarper
            src={menuObject.image}
            alt={menuObject.image}
            className={`${isActive && !isOpen && "imgWrapperActive"}`}
          />
          <Box className={!isOpen ? "hidden" : ""}>{menuObject.title}</Box>
        </MenuItem>
      )}
    </NavLink>
  );
};

export default NavigationMenu;
