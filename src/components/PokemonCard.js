import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./PokemonCard.css";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PokemonCard = ({ pokemon }) => {
  const pokemonName = capitalizeFirstLetter(pokemon.data.name);

  let pokemonType = pokemon.data.types.map((el) => el.type.name).join(" ");

  //front state
  const [front, setFront] = useState(true);
  const clickHandler = () => {
    setFront(!front);
    console.log(front);
  };

  return (
    <Card onClick={clickHandler} className="card">
      <Card.Title>{pokemonName}</Card.Title>
      <Card.Body>
        <Card.Img
          variant="top"
          src={
            front
              ? pokemon.data.sprites.front_default
              : pokemon.data.sprites.back_default
          }
        />

        <Card.Subtitle>{pokemonType}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
