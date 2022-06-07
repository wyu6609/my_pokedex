import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import PokemonCollection from "./PokemonCollection";
import { Container, Stack } from "react-bootstrap";
const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon?limit=151";

const PokemonPage = () => {
  //set pokemon state
  const [pokemon, setPokemon] = useState([]);
  //set search term
  const [searchTerm, setSearchTerm] = useState("");

  //fetch call on component load
  useEffect(() => {
    fetchPokemons();
  }, []);

  //axios fetch

  const fetchPokemons = () => {
    axios.get(URL_ENDPOINT).then((response) => {
      setPokemon(response.data.results);
    });
  };

  //filter Pokemon by search
  const pokemonsToDisplay = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container>
      <Stack gap={4}>
        <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
        <PokemonCollection pokemon={pokemonsToDisplay} />
      </Stack>
    </Container>
  );
};

export default PokemonPage;
