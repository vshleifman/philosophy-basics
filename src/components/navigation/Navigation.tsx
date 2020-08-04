import React, { useState, FormEvent } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import logo from "img/philosophy.png";
const { Item } = NavDropdown;
const { Brand, Toggle, Collapse } = Navbar;
const { Link } = Nav;

interface DropCatType {
  [key: string]: string[];
}

const dropCategories: DropCatType = {
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

const createDropDowns = (dropCategories: DropCatType) =>
  Object.keys(dropCategories).map((category, i) => {
    return (
      <NavDropdown id={category} key={category} title={category}>
        {dropCategories[category].map((subCategory: string) => (
          <Item role="sub-category" key={subCategory} href={`/${subCategory}`}>
            {subCategory}
          </Item>
        ))}
      </NavDropdown>
    );
  });

const Navigation = () => {
  const [text, setText] = useState(null);

  const change = (event: any) => {
    setText(event.target.value);
    event.preventDefault();
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Congrats! You've sarched for ${text}`);
  };
  return (
    <Navbar expand="md" bg="dark" variant="dark" sticky="top">
      <Brand>
        <Link href="/">
          <Image height="35px" src={logo} roundedCircle></Image>
        </Link>
      </Brand>
      <Toggle aria-controls="navbar" />
      <Collapse id="navbar">
        <Nav>{createDropDowns(dropCategories)}</Nav>
        <Nav>
          <Link href="/historical">By Historical Period</Link>
          <Link href="/movement">By Movement</Link>
          <Link href="/philosophers">By Philosopher</Link>
        </Nav>
        <Nav className="ml-auto">
          <Form onSubmit={onSubmit} inline>
            <FormControl
              placeholder="Search"
              className="mr-sm-2"
              onChange={change}
            />
          </Form>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
