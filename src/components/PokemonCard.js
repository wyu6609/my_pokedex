import React, { useState, useEffect } from "react";
import { Card, Badge } from "react-bootstrap";

import "./PokemonCard.css";

const PokemonCard = ({
  pokemon,
  setModalShow,
  isFavorite = false,
  onToggleFavorite,
}) => {
  //set pokemon type state
  const [pokeType, setPokeType] = useState(pokemon.data.types[0].type.name);
  //set pokemon type color state
  const [typeColor, setTypeColor] = useState(pokemon.data.types[0].type.name);
  const [isFav, setIsFav] = useState(isFavorite);

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

  const toggleFavorite = (event) => {
    event.stopPropagation();
    setIsFav(!isFav);
    if (onToggleFavorite) {
      onToggleFavorite(pokemon.data.id);
    }
  };

  const hp = pokemon.data.stats[0].base_stat;
  const attack = pokemon.data.stats[1].base_stat;
  const defense = pokemon.data.stats[2].base_stat;
  const maxStat = 150;

  return (
    <Card
      size="lg"
      onClick={() => {
        setModalShow(true);
      }}
      className={`card shadow pokemon-card border-${typeColor} text-dark p-2`}
    >
      <Badge
        pill
        bg="transparent"
        text="dark"
        className="position-absolute top-0 start-0 mt-2 ms-2 pokemon-id-badge"
      >
        #{pokemon.data.id}
      </Badge>

      <span
        className="favorite-icon"
        onClick={toggleFavorite}
        title={isFav ? "Remove from favorites" : "Add to favorites"}
        style={{ cursor: "pointer" }}
      >
        {isFav ? (
          <svg
            className="position-absolute top-0 end-0 mt-2 me-2"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "#FFD700" }}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
          </svg>
        ) : (
          <svg
            className="position-absolute top-0 end-0 mt-2 me-2 info-svg"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
          </svg>
        )}
      </span>

      <Card.Title
        className="text-capitalize text-center font-weight-bold"
        style={{ fontSize: "1.1rem", marginTop: "1.5rem" }}
      >
        {pokemon.data.name}
      </Card.Title>
      <Card.Body className="p-2">
        <Card.Img
          className="pokemon-image rounded-3"
          variant="top"
          src={
            front
              ? pokemon.data.sprites.front_default
              : pokemon.data.sprites.back_default
          }
          onClick={clickHandler}
          style={{ cursor: "pointer" }}
        />

        <div className="types-container mt-2 d-flex gap-2 justify-content-center flex-wrap">
          {pokemon.data.types.map((type, index) => (
            <Badge key={index} className={`${type.type.name} type-badge`}>
              {type.type.name}
            </Badge>
          ))}
        </div>

        <div className="stats-container mt-3">
          <div className="stat-row d-flex justify-content-between align-items-center mb-2">
            <span className="stat-label" style={{ fontSize: "0.75rem" }}>
              HP
            </span>
            <div className="stat-bar">
              <div
                className="stat-fill hp"
                style={{ width: `${(hp / maxStat) * 100}%` }}
              ></div>
            </div>
            <span className="stat-value" style={{ fontSize: "0.7rem" }}>
              {hp}
            </span>
          </div>
          <div className="stat-row d-flex justify-content-between align-items-center mb-2">
            <span className="stat-label" style={{ fontSize: "0.75rem" }}>
              ATK
            </span>
            <div className="stat-bar">
              <div
                className="stat-fill atk"
                style={{ width: `${(attack / maxStat) * 100}%` }}
              ></div>
            </div>
            <span className="stat-value" style={{ fontSize: "0.7rem" }}>
              {attack}
            </span>
          </div>
          <div className="stat-row d-flex justify-content-between align-items-center">
            <span className="stat-label" style={{ fontSize: "0.75rem" }}>
              DEF
            </span>
            <div className="stat-bar">
              <div
                className="stat-fill def"
                style={{ width: `${(defense / maxStat) * 100}%` }}
              ></div>
            </div>
            <span className="stat-value" style={{ fontSize: "0.7rem" }}>
              {defense}
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
