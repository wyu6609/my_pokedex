import React from "react";
import PokemonCard from "./PokemonCard";
import { Container, Row, Col } from "react-bootstrap";

const PokemonCollection = ({ pokemon }) => {
  console.log(pokemon);
  const cards = pokemon.map((poke) => {
    return (
      <Col>
        <PokemonCard key={poke.data.id} pokemon={poke} />
      </Col>
    );
  });
  return (
    <Container align="center">
      <Row xs="auto">{cards}</Row>
    </Container>
  );
};

export default PokemonCollection;
