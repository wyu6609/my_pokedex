import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./PokemonCard.css";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PokemonCard = ({ pokemon }) => {
  //pokemon data state
  const [pokemonData, setPokemonData] = useState("");

  useEffect(() => {
    fetchPokemonData();
  }, []);

  // fetch pokemon data
  const fetchPokemonData = () => {
    let URL_ENDPOINT = pokemon.url;
    axios.get(URL_ENDPOINT).then((response) => {
      setPokemonData(response.data);
    });
  };
  console.log(pokemonData);
  //front state
  const [front, setFront] = useState(true);
  const clickHandler = () => {
    setFront(!front);
    console.log(front);
  };

  return (
    <Card onClick={clickHandler} className="card">
      <Card.Title>{capitalizeFirstLetter(pokemon.name)}</Card.Title>
      <Card.Body>
        <Card.Img
          variant="top"
          src={
            front
              ? pokemonData.sprites.front_default
              : pokemonData.sprites.back_default
          }
        />
        <Card.Text>{pokemonData.weight} lbs</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
