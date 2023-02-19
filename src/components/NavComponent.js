import React from "react";

import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
const NavComponent = () => {
  return (
    <Navbar
      bg="danger"
      variant="dark"
      className="shadow "
      key={false}
      expand={false}
    >
      <Container className="justify-content-center">
        <Navbar.Brand    className="text-align-center">
          <a href = "https://pokeapi.co/" target = "_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            width="90%"
            height="50px"
            alt="Pokemon logo"
          />
          </a>
        </Navbar.Brand>
        
      </Container>
    </Navbar>
  );
};

export default NavComponent;
