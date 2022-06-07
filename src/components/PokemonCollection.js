import React from "react";
import PokemonCard from "./PokemonCard";
import { Container, Row, Col } from "react-bootstrap";

const PokemonCollection = ({ pokemon }) => {
  console.log(pokemon);
  const cards = pokemon.map((poke) => {
    <PokemonCard key={poke.id} pokemon={poke} />;
  });
  return (
    <Container align="center">
      <Row xs="auto">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </Row>
    </Container>
  );
};

export default PokemonCollection;
