import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import PokemonCollection from "./PokemonCollection";
import { Container, Stack } from "react-bootstrap";
const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon?limit=386";

const PokemonPage = () => {
  //set pokemon state
  const [pokemon, setPokemon] = useState([]);
  //set pokemon urls
  const [pokemonUrl, setPokemonUrl] = useState([]);
  //set search term
  const [searchTerm, setSearchTerm] = useState("");

  //fetch call on component load
  useEffect(() => {
    fetchPokemons();
  }, []);

  //axios fetch

  const fetchPokemons = () => {
    axios.get(URL_ENDPOINT).then((response) => {
      let urlArr = response.data.results.map((el) => el.url);

      axios.all(urlArr.map((l) => axios.get(l))).then(
        axios.spread(function (...res) {
          // all requests are now complete
          setPokemon(res);
        })
      );
    });
  };

  //filter Pokemon by search
  const pokemonsToDisplay = pokemon.filter((poke) =>
    poke.data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Stack gap={4}>
        <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
        <PokemonCollection pokemon={pokemonsToDisplay} center />
      </Stack>
    </Container>
  );
};

export default PokemonPage;
