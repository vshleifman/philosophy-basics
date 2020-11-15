import React from "react";
import SearchBar from "components/navigation/SearchBar";
import NavLink from "components/navigation/NavLink";
import DropDown, { DropDownPropType } from "components/navigation/DropDown";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import logo from "img/philosophy.png";

const { Brand, Toggle, Collapse } = Navbar;
const { Link } = Nav;

const dropCategories: DropDownPropType = {
  Philosophy: [
    "General",
    "A Quick History",
    "What is Philosophy?",
    "Western Philosophy",
    "Eastern Philosophy",
    "African Philosophy",
    "Philosophy Map",
    "Philosophy Timeline",
    "Famous Quotes",
    "Glossary",
    "Philosophy Books",
    "FAQ / Contact",
  ],

  "By Branch": [
    "Metaphysics",
    "Epistemology",
    "Ethics",
    "Aesthetics",
    "Logic",
    "Political Philosophy",
    "Philosophy of...",
  ],
};

const Navigation = () => {
  return (
    <div>
      <Navbar
        data-testid="navigation"
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Brand data-testid="brand-link">
          <Link href="/">
            <Image height="35px" src={logo} roundedCircle></Image>
          </Link>
        </Brand>
        <Toggle aria-controls="navbar" />
        <Collapse id="navbar">
          {process.env.NODE_ENV === "development" ? (
            <Nav data-testid="dropdowns">
              <DropDown drop={dropCategories} />
            </Nav>
          ) : null}
          <Nav data-testid="links">
            <NavLink page={"historical"} />
            <NavLink page={"movement"} />
            <NavLink page={"philosophers"} />
          </Nav>
          {process.env.NODE_ENV === "development" ? (
            <Nav className="ml-auto">
              <SearchBar />
            </Nav>
          ) : null}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
