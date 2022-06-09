import React, { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import axios from "axios";
import "./PokemonCard.css";

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

  let pokemonType = pokemon.data.types.map((el) => el.type.name).join(" ");

  //front state
  const [front, setFront] = useState(true);
  const clickHandler = () => {
    setFront(!front);
  };

  return (
    <Card className={`card shadow  ${typeColor} text-white `}>
      <Container className="d-flex justify-content-between pt-2">
        <span className="pokemon-id"># {pokemon.data.id}</span>
        <span>
          <svg
            className="info-svg"
            onClick={() => {
              setModalShow(true);
            }}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"></path>
            </g>
          </svg>
        </span>
      </Container>
      <Card.Title className="text-capitalize" align="center">
        {pokemon.data.name}{" "}
      </Card.Title>

      <Card.Body>
        <Card.Img
          className="bg-grey rounded-circle "
          onClick={clickHandler}
          variant="top"
          src={
            front
              ? pokemon.data.sprites.front_default
              : pokemon.data.sprites.back_default
          }
        />

        <Card.Subtitle align="center" className=" pt-4">
          {pokemon.data.weight} lbs
        </Card.Subtitle>
        <Card.Subtitle align="center" className="pt-2 text-uppercase">
          {pokeType}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
