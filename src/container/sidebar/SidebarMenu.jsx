import React, { useState } from "react";
import {
  IconPannelDiv,
  LogoDiv,
  LogoTextDiv,
  MainDiv,
  MenuItemContent,
  MenuItemWarper,
} from "./StyledSidebarMenu";
import sidebarMenuLinks from "../../constants/SidebarMenuLinks";
import NavigationMenu from "../../components/navbarComponents/NavigationMenu";
import CompanyLogo from "../../assets/sidebar/add.svg";

const SideBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainDiv
      style={{ width: isOpen ? "286px" : "72px" }}
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <LogoDiv>
        <img src={CompanyLogo} alt="logo" height={40} width={40} />
        <LogoTextDiv className={!isOpen ? "hidden" : ""}>PROCUREMENT</LogoTextDiv>
      </LogoDiv>
      <IconPannelDiv>
        {/* Main Menu Section */}
        <MenuItemWarper>
          <MenuItemContent>
            {sidebarMenuLinks.mainMenuPages.map((menuObject) => (
              <NavigationMenu menuObject={menuObject} isOpen={isOpen} setIsOpen={setIsOpen} />
            ))}
          </MenuItemContent>
        </MenuItemWarper>
      </IconPannelDiv>
    </MainDiv>
  );
};

export default SideBarMenu;
