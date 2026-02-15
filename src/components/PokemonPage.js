import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import PokemonCollection from "./PokemonCollection";

import { Spinner } from "react-bootstrap";

const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon?limit=1020";

const PokemonPage = () => {
  //set pokemon state
  const [pokemon, setPokemon] = useState([]);
  //set loading

  const [loading, setLoading] = useState(false);
  //set search term
  const [searchTerm, setSearchTerm] = useState("");

  // set filter status
  const [status, setStatus] = useState("all");

  //pokemon type filter state
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  // pagination state
  const [displayCount, setDisplayCount] = useState(50);
  const ITEMS_PER_PAGE = 50;

  // favorites state
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("pokemonFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  // save favorites to localStorage
  const saveFavoritesToStorage = (favs) => {
    localStorage.setItem("pokemonFavorites", JSON.stringify(favs));
  };

  const toggleFavorite = (pokemonId) => {
    const newFavorites = favorites.includes(pokemonId)
      ? favorites.filter((id) => id !== pokemonId)
      : [...favorites, pokemonId];
    setFavorites(newFavorites);
    saveFavoritesToStorage(newFavorites);
  };

  //filter pokemon type handler
  const filterHandler = () => {
    switch (status) {
      case "bug":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "bug")
        );
        break;
      case "dark":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "dark")
        );
        break;
      case "dragon":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "dragon")
        );
        break;
      case "electric":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "electric")
        );
        break;
      case "fairy":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "fairy")
        );
        break;
      case "fighting":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "fighting")
        );
        break;
      case "fire":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "fire")
        );
        break;
      case "flying":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "flying")
        );
        break;
      case "ghost":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "ghost")
        );
        break;
      case "grass":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "grass")
        );
        break;
      case "ground":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "ground")
        );
        break;
      case "ice":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "ice")
        );
        break;
      case "normal":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "normal")
        );
        break;
      case "poison":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "poison")
        );
        break;
      case "psychic":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "psychic")
        );
        break;
      case "rock":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "rock")
        );
        break;
      case "steel":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "steel")
        );
        break;
      case "water":
        setFilteredPokemon(
          pokemon.filter((poke) => poke.data.types[0].type.name === "water")
        );
        break;
      default:
        setFilteredPokemon(pokemon);
        break;
    }
  };

  //axios fetch

  const fetchPokemons = () => {
    axios.get(URL_ENDPOINT).then((response) => {
      let urlArr = response.data.results.map((el) => el.url);

      axios.all(urlArr.map((l) => axios.get(l))).then(
        axios.spread(function (...res) {
          // all requests are now complete
          setPokemon(res);
          setLoading(true);
        })
      );
    });
  };

  //fetch call on component load
  useEffect(() => {
    fetchPokemons();
  }, []);

  // pokemon type component load

  useEffect(() => {
    filterHandler();
  }, [pokemon, status]);

  //filter Pokemon by search
  const pokemonsToDisplay = filteredPokemon
    .filter(
      (poke) =>
        poke.data.id == searchTerm ||
        poke.data.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, displayCount);

  const totalFiltered = filteredPokemon.filter(
    (poke) =>
      poke.data.id == searchTerm ||
      poke.data.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).length;

  const canLoadMore = displayCount < totalFiltered;

  return (
    <>
      <Search
        searchTerm={searchTerm}
        onChangeSearch={setSearchTerm}
        setStatus={setStatus}
        status={status}
      />
      {loading ? (
        <>
          <div className="mt-3 mx-4">
            <small className="text-muted">
              Showing {pokemonsToDisplay.length} of {totalFiltered} Pokémon
            </small>
          </div>
          <PokemonCollection
            className="mt-2"
            pokemon={pokemonsToDisplay}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
          {canLoadMore && (
            <div className="d-flex justify-content-center mt-4 mb-4">
              <button
                className="btn btn-danger btn-lg"
                onClick={() => setDisplayCount(displayCount + ITEMS_PER_PAGE)}
                style={{
                  padding: "10px 30px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  borderRadius: "25px",
                }}
              >
                Load More Pokémon
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="d-flex align-items-center my-auto">
          <Spinner
            style={{ width: "10", height: "10" }}
            animation="border"
            variant="danger"
            className="mx-auto"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};

export default PokemonPage;
