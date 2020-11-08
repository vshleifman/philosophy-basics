import React from 'react';

import NavDropdown from "react-bootstrap/NavDropdown";
const { Item } = NavDropdown;

export interface DropDownPropType {
  [key: string]: string[];
}

export const DropDown = ({drop}: {drop: DropDownPropType}) => (
  <>
    {Object.keys(drop).map((category: string, i) => (
      <NavDropdown id={category} key={category} title={category}>
        {drop[category].map((subCategory: string) => (
          <Item key={subCategory} href={`/${subCategory}`}>
            {subCategory}
          </Item>
        ))}
      </NavDropdown>
      )
    )}
  </>
);

export default DropDown