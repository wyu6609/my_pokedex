import React from "react";

import { Navbar, Container } from "react-bootstrap";
const NavComponent = () => {
  return (
    <Navbar bg="danger" className="shadow ">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            width="100%"
            height="50px"
            className="d-inline-block align-top "
            alt="Pokemon logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
