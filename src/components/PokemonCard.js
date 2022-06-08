import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./PokemonCard.css";

// function
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PokemonCard = ({ pokemon }) => {
  //set pokemon type state
  const [pokeType, setPokeType] = useState(pokemon.data.types[0].type.name);
  //set pokemon type color state
  const [typeColor, setTypeColor] = useState("");
  console.log(pokeType);
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
    console.log(front);
  };

  return (
    <Card onClick={clickHandler} className={`card shadow ${typeColor}`}>
      <Card.Title className="pt-3">{pokemonName}</Card.Title>
      <Card.Body>
        <Card.Img
          variant="top"
          src={
            front
              ? pokemon.data.sprites.front_default
              : pokemon.data.sprites.back_default
          }
        />

        <Card.Subtitle className="text-muted py-1">
          {pokemon.data.weight} lbs
        </Card.Subtitle>
        <Card.Subtitle>{pokemonType.toUpperCase()}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
