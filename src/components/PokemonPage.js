import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import PokemonCollection from "./PokemonCollection";
import { Container, Stack, Spinner, Button } from "react-bootstrap";

const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon?limit= 913";

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
          pokemon.filter((poke) => poke.data.types[0].type.name === "psychic")
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
  const pokemonsToDisplay = filteredPokemon.filter((poke) =>
    poke.data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mx-auto">
      <Stack className="px-5" gap={4}>
        <Search
          searchTerm={searchTerm}
          onChangeSearch={setSearchTerm}
          setStatus={setStatus}
          status={status}
        />
        {loading ? (
          <PokemonCollection pokemon={pokemonsToDisplay} />
        ) : (
          <Spinner animation="border" variant="danger" className="mx-auto ">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Stack>
    </Container>
  );
};

export default PokemonPage;
