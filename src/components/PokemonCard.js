import React, { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import axios from "axios";
import "./PokemonCard.css";

// function
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PokemonCard = ({ pokemon, setModalShow }) => {
  //set pokemon type state
  const [pokeType, setPokeType] = useState(pokemon.data.types[0].type.name);
  //set pokemon type color state
  const [typeColor, setTypeColor] = useState("");

  // set color type
  useEffect(() => {
    switch (pokeType) {
      case "bug":
        setTypeColor("bug");
        break;
      case "dark":
        setTypeColor("dark");
        break;
      case "dragon":
        setTypeColor("dragon");

        break;
      case "electric":
        setTypeColor("electric");
        break;
      case "fairy":
        setTypeColor("fairy");
        break;
      case "fighting":
        setTypeColor("fighting");
        break;
      case "fire":
        setTypeColor("fire");
        break;
      case "flying":
        setTypeColor("flying");
        break;
      case "ghost":
        setTypeColor("ghost");
        break;
      case "grass":
        setTypeColor("grass");
        break;
      case "ground":
        setTypeColor("ground");
        break;
      case "ice":
        setTypeColor("ice");
        break;
      case "normal":
        setTypeColor("normal");
        break;
      case "poison":
        setTypeColor("poison");
        break;
      case "psychic":
        setTypeColor("psychic");
        break;
      case "rock":
        setTypeColor("rock");
        break;
      case "steel":
        setTypeColor("steel");
        break;
      case "water":
        setTypeColor("water");
        break;
      default:
        setTypeColor("");
    }
  }, [pokeType]);

  //pokemon name capitalize first letter
  const pokemonName = capitalizeFirstLetter(pokemon.data.name);

  let pokemonType = pokemon.data.types.map((el) => el.type.name).join(" ");

  //front state
  const [front, setFront] = useState(true);
  const clickHandler = () => {
    setFront(!front);
  };

  return (
    <Card className={`card shadow  ${typeColor}`}>
      <Container className="d-flex justify-content-between pt-2">
        <span className="pokemon-id"># {pokemon.data.id}</span>
        <Card.Title align="center">{pokemonName} </Card.Title>
        <span>
          <svg
            className="svg"
            onClick={() => {
              setModalShow(true);
            }}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1"
            viewBox="0 0 48 48"
            enable-background="new 0 0 48 48"
            height="1.2em"
            width="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle fill="#2196F3" cx="24" cy="24" r="21"></circle>
            <rect x="22" y="22" fill="#fff" width="4" height="11"></rect>
            <circle fill="#fff" cx="24" cy="16.5" r="2.5"></circle>
          </svg>
        </span>
      </Container>

      <Card.Body>
        <Card.Img
          className="bg-light  rounded-circle "
          onClick={clickHandler}
          variant="top"
          src={
            front
              ? pokemon.data.sprites.front_default
              : pokemon.data.sprites.back_default
          }
        />

        <Card.Subtitle align="center" className="text-muted pt-4">
          {pokemon.data.weight} lbs
        </Card.Subtitle>
        <Card.Subtitle align="center" className="pt-2">
          {pokeType.toUpperCase()}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
