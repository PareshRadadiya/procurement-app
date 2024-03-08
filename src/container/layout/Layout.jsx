import React from "react";
import { ChildDiv, MainDiv } from "./StyledLayout";
import SideBarMenu from "../sidebar/SidebarMenu";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <MainDiv>
      <SideBarMenu />
      <ChildDiv>
        <Header />
        {children}
      </ChildDiv>
    </MainDiv>
  );
};

export default Layout;
