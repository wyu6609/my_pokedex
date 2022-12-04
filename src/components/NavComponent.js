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
      <Container className="d-flex justify-content-between">
        <Navbar.Brand placement="start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            width="100%"
            height="50px"
            alt="Pokemon logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-false`}
          variant="primary"
        />
      </Container>
      <Container>
        <Navbar.Offcanvas
          variant="primary"
          id={`offcanvasNavbar-expand-false`}
          aria-labelledby={`offcanvasNavbarLabel-expand-false`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
              More Info
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className=" pe-3">
              <Button
                onClick={() => {
                  let url = "https://pokeapi.co/";
                  window.open(url, "_blank");
                }}
                className="m-2"
                variant="warning"
              >
                Pokémon API
              </Button>
              <Button
                onClick={() => {
                  let url = "https://pokemon.fandom.com/wiki/Pokemon_Wiki";
                  window.open(url, "_blank");
                }}
                className="m-2"
                variant="success"
              >
                Pokémon Wiki
              </Button>
              <Button
                onClick={() => {
                  let url = "https://www.yuwilliam.com/projects";
                  window.open(url, "_blank");
                }}
                className="m-2"
                variant="primary"
              >
                More Projects Here
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
