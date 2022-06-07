import React from "react";
import "./Search.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";
const Search = ({ searchTerm, onChangeSearch }) => {
  //search input function
  const handleChange = (event) => {
    onChangeSearch(event.target.value);
  };

  return (
    <InputGroup className="mb-3" gap={3}>
      <FormControl
        placeholder="Search Pokemon"
        aria-label="Search Pokemon"
        aria-describedby="basic-addon2"
        value={searchTerm}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default Search;
