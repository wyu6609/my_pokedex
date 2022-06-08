import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import PokemonModal from "./PokemonModal";
import { v4 as uuidv4 } from "uuid";

const PokemonCollection = ({ pokemon }) => {
  // pokemon details modal state
  const [modalShow, setModalShow] = useState(false);
  const cards = pokemon.map((poke) => {
    return (
      <Col
        onClick={() => setModalShow(true)}
        key={uuidv4()}
        xs={12}
        md={3}
        lg={2}
      >
        <PokemonCard pokemon={poke} />
      </Col>
    );
  });
  return (
    <>
      <PokemonModal show={modalShow} onHide={() => setModalShow(false)} />
      <Container>
        <Row>{cards}</Row>
      </Container>
    </>
  );
};

export default PokemonCollection;
