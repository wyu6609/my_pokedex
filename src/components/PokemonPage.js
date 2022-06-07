import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import PokemonCollection from "./PokemonCollection";
import { Container, Stack, Spinner } from "react-bootstrap";

const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon?limit=386";

const PokemonPage = () => {
  //set pokemon state
  const [pokemon, setPokemon] = useState([]);
  //set loading

  const [loading, setLoading] = useState(false);
  //set search term
  const [searchTerm, setSearchTerm] = useState("");

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

  //filter Pokemon by search
  const pokemonsToDisplay = pokemon.filter((poke) =>
    poke.data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mx-auto">
      <Stack gap={4}>
        <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
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
