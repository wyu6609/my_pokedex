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
      <Container fluid>
        <Navbar.Brand className="text-align-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            width="90%"
            height="50px"
            alt="Pokemon logo"
          />
        </Navbar.Brand>
        
      </Container>
    </Navbar>
  );
};

export default NavComponent;
