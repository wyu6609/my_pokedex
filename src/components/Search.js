import React from "react";
import "./Search.css";
import { InputGroup, Container, FormControl, Dropdown } from "react-bootstrap";

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
    <Container className="sticky-top">
      <Dropdown as={InputGroup} className="my-4   shadow ">
        <FormControl
          placeholder="Search a pokemon by id or name"
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
          className="text-uppercase font-weight-bold "
          onClick={statusHandler}
        >
          <Dropdown.Item className=" all-text-search " value="all">
            All
          </Dropdown.Item>
          <Dropdown.Item className="bug-text-search ">Bug</Dropdown.Item>
          <Dropdown.Item className="dark-text-search">Dark</Dropdown.Item>
          <Dropdown.Item className="dragon-text-search">Dragon</Dropdown.Item>
          <Dropdown.Item className="electric-text-search">
            Electric
          </Dropdown.Item>
          <Dropdown.Item className="fairy-text-search">Fairy</Dropdown.Item>
          <Dropdown.Item className="fighting-text-search">
            Fighting
          </Dropdown.Item>
          <Dropdown.Item className="fire-text-search">Fire</Dropdown.Item>
          <Dropdown.Item className="flying-text-search">Flying</Dropdown.Item>
          <Dropdown.Item className="ghost-text-search">Ghost</Dropdown.Item>
          <Dropdown.Item className="grass-text-search">Grass</Dropdown.Item>
          <Dropdown.Item className="ground-text-search">Ground</Dropdown.Item>
          <Dropdown.Item className="ice-text-search">Ice</Dropdown.Item>
          <Dropdown.Item className="normal-text-search">Normal</Dropdown.Item>
          <Dropdown.Item className="poison-text-search">Poison</Dropdown.Item>
          <Dropdown.Item className="psychic-text-search">Psychic</Dropdown.Item>
          <Dropdown.Item className="rock-text-search">Rock</Dropdown.Item>
          <Dropdown.Item className="steel-text-search">Steel</Dropdown.Item>
          <Dropdown.Item className="water-text-search">Water</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default Search;
