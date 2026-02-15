import React from "react";
import "./Search.css";
import { FormControl, Dropdown, Container } from "react-bootstrap";

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
  const statusHandler = (type) => {
    setStatus(type.toLowerCase());
  };

  const typeList = [
    "all",
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  return (
    <Container className="sticky-top">
      <div className="search-wrapper my-4 mx-lg-5 mx-sm-5 shadow">
        <FormControl
          placeholder="Search a pokemon by id or name"
          aria-label="Search Pokemon"
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />

        <Dropdown>
          <Dropdown.Toggle
            className={`${status} text-uppercase dropdown-btn`}
            id="dropdown-split-basic"
          >
            {capitalizeFirstLetter(status)}
          </Dropdown.Toggle>

          <Dropdown.Menu className="text-uppercase font-weight-bold dropdown-menu-custom">
            {typeList.map((type) => (
              <Dropdown.Item
                key={type}
                className={`${type}-text-search`}
                onClick={() => statusHandler(type)}
              >
                {capitalizeFirstLetter(type)}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  );
};

export default Search;
