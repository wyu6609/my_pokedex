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
    <Dropdown as={InputGroup} className="mt-4 sticky-top shadow ">
      <FormControl
        placeholder="Search Pokemon"
        aria-label="Search Pokemon"
        aria-describedby="basic-addon2"
        value={searchTerm}
        onChange={handleChange}
      />

      <Dropdown.Toggle
        className={`${status} text-uppercase `}
        variant="danger"
        id="dropdown-split-basic"
      >
        {capitalizeFirstLetter(status) + " "}
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="bg-danger text-uppercase font-weight-bold opacity-75 "
        onClick={statusHandler}
      >
        <Dropdown.Item className="text-white " value="all">
          All
        </Dropdown.Item>
        <Dropdown.Item className="bug-text ">Bug</Dropdown.Item>
        <Dropdown.Item className="dark-text">Dark</Dropdown.Item>
        <Dropdown.Item className="dragon-text">Dragon</Dropdown.Item>
        <Dropdown.Item className="electric-text">Electric</Dropdown.Item>
        <Dropdown.Item className="fairy-text">Fairy</Dropdown.Item>
        <Dropdown.Item className="Fighting-text">Fighting</Dropdown.Item>
        <Dropdown.Item className="fire-text">Fire</Dropdown.Item>
        <Dropdown.Item className="flying-text">Flying</Dropdown.Item>
        <Dropdown.Item className="ghost-text">Ghost</Dropdown.Item>
        <Dropdown.Item className="grass-text">Grass</Dropdown.Item>
        <Dropdown.Item className="ground-text">Ground</Dropdown.Item>
        <Dropdown.Item className="ice-text">Ice</Dropdown.Item>
        <Dropdown.Item className="normal-text">Normal</Dropdown.Item>
        <Dropdown.Item className="poison-text">Poison</Dropdown.Item>
        <Dropdown.Item className="psychic-text">Psychic</Dropdown.Item>
        <Dropdown.Item className="rock-text">Rock</Dropdown.Item>
        <Dropdown.Item className="steel-text">Steel</Dropdown.Item>
        <Dropdown.Item className="water-text">Water</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Search;
