import React, { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import styled from "styled-components";

const UL = styled.ul`
  color: white;
`;

const SearchBar = () => {
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
    <div>
      <Form
        data-testid="search-bar"
        onSubmit={onSubmit}
        inline
        className="d-flex flex-column"
      >
        <FormControl
          placeholder="Search"
          className="mr-sm-2"
          onChange={change}
        />
        {/* <UL>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </UL> */}
      </Form>
    </div>
  );
};

export default SearchBar;
