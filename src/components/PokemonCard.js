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
  const clickHandler = (event) => {
    event.stopPropagation();
    setFront(!front);
  };

  return (
    <Card
      size="lg"
      onClick={() => {
        setModalShow(true);
      }}
      className={`card shadow  ${typeColor} text-white `}
    >
      <Container className="d-flex justify-content-between pt-2">
        <span className="pokemon-id"># {pokemon.data.id}</span>
        <span>
          <svg
            onClick={clickHandler}
            className="mb-1 info-svg"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.758 8.758L5.344 7.344C4.537 8.15 3.9 9.139 3.503 10.203l1.873.701C5.675 10.105 6.152 9.363 6.758 8.758zM19 12.999c0-2.138-.832-4.146-2.344-5.655C15.385 6.07 13.758 5.287 12 5.069V2L7 6l5 4V7.089c1.222.204 2.349.775 3.242 1.669C16.376 9.891 17 11.397 17 13c0 .001 0 .002 0 .002 0 .33-.033.655-.086.977-.007.043-.011.088-.019.131-.058.307-.142.606-.247.902-.208.585-.506 1.135-.891 1.634-.16.209-.331.412-.516.597-.183.183-.379.349-.583.506-.048.037-.096.072-.145.107-.193.141-.393.271-.601.388-.523.292-1.086.504-1.676.627-.142.03-.285.05-.43.069-.062.009-.122.021-.184.027-.633.064-1.28.031-1.898-.103l-.424 1.955C9.857 20.939 10.429 21 11 21c.28 0 .559-.016.834-.045.069-.007.138-.021.207-.03.205-.026.409-.056.61-.098.018-.004.035-.005.053-.009l-.001-.005c.749-.161 1.467-.428 2.136-.795l.001.001c.01-.006.019-.013.028-.019.284-.157.557-.337.821-.529.064-.046.127-.093.189-.141.27-.209.532-.43.777-.675.248-.247.47-.513.681-.785.021-.028.049-.053.07-.081L17.4 17.785c.462-.614.828-1.285 1.093-1.997l.008.003c.029-.078.05-.158.076-.237.037-.11.075-.221.107-.333.04-.14.073-.281.105-.423.022-.099.048-.195.066-.295.032-.171.056-.344.076-.516.01-.076.023-.15.03-.227.023-.249.037-.5.037-.753C19 13.005 19 13.003 19 12.999L19 12.999C19 12.999 19 12.999 19 12.999L19 12.999zM6.197 16.597l-1.6 1.201c.229.305.48.594.746.858.541.541 1.155 1.001 1.823 1.367l.961-1.754c-.502-.275-.963-.62-1.371-1.029C6.557 17.042 6.369 16.825 6.197 16.597zM5 13c0-.145.005-.287.015-.429l-1.994-.143C3.007 12.617 3 12.807 3 13c0 .964.17 1.905.504 2.8l1.873-.701C5.127 14.43 5 13.724 5 13z"></path>
          </svg>
        </span>
      </Container>
      <Card.Title className="text-capitalize" align="center">
        {pokemon.data.name}
      </Card.Title>

      <Card.Body>
        <Card.Img
          className="bg-grey rounded-circle "
          variant="top"
          src={
            front
              ? pokemon.data.sprites.front_default
              : pokemon.data.sprites.back_default
          }
        />

        <Card.Subtitle align="center" className="">
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
