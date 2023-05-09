import React from "react";
import { Header, NavbarItem, NavbarTitle } from "./common-components";

const NavBar = ({ onClickBookMark, onClickNews }) => {
  return (
    <Header>
      <NavbarTitle>Tesla News Updates</NavbarTitle>
      <NavbarItem onClick={onClickNews}>News</NavbarItem>
      <NavbarItem onClick={onClickBookMark}>Bookmarked</NavbarItem>
    </Header>
  );
};

export default NavBar;
