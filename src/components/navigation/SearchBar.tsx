import React, { FormEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

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
    <Form data-testid="search-bar" onSubmit={onSubmit} inline>
      <FormControl placeholder="Search" className="mr-sm-2" onChange={change} />
    </Form>
  );
};

export default SearchBar;
