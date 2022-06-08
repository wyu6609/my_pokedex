import React from "react";
import "./Search.css";
import {
  InputGroup,
  Button,
  FormControl,
  Dropdown,
  Form,
} from "react-bootstrap";

// Capitalize First letter
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Search = ({ searchTerm, onChangeSearch, setStatus, status }) => {
  //search input function
  const handleChange = (event) => {
    onChangeSearch(event.target.value);
  };

  //status Handler
  const statusHandler = (e) => {
    setStatus(e.target.innerText.toLowerCase());
  };

  return (
    <Dropdown as={InputGroup} className="mb-3 sticky-top shadow " gap={3}>
      <FormControl
        placeholder="Search Pokemon"
        aria-label="Search Pokemon"
        aria-describedby="basic-addon2"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button className="filter-btn shadow-none" variant="danger">
        Type: {capitalizeFirstLetter(status)}
      </Button>
      <Dropdown.Toggle
        split
        className="text-white"
        variant="danger"
        id="dropdown-split-basic"
      />

      <Dropdown.Menu className="bg-danger opacity-75" onClick={statusHandler}>
        <Dropdown.Item className="text-white" value="all">
          All
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="bug">
          Bug
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="dark">
          Dark
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="dragon">
          Dragon
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="electric">
          Electric
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="fairy">
          Fairy
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="Fighting">
          Fighting
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="fire">
          Fire
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="flying">
          Flying
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="ghost">
          Ghost
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="grass">
          Grass
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="ground">
          Ground
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="ice">
          Ice
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="normal">
          Normal
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="poison">
          Poison
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="psychic">
          Psychic
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="rock">
          Rock
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="steel">
          Steel
        </Dropdown.Item>
        <Dropdown.Item className="text-white" value="water">
          Water
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Search;
