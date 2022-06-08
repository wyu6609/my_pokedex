import React from "react";
import PokemonCard from "./PokemonCard";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const PokemonCollection = ({ pokemon }) => {
  const cards = pokemon.map((poke) => {
    return (
      <Col key={uuidv4()} xs={12} md={3} lg={2}>
        <PokemonCard pokemon={poke} />
      </Col>
    );
  });
  return (
    <Container align="center">
      <Row>{cards}</Row>
    </Container>
  );
};

export default PokemonCollection;
