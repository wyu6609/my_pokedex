import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import PokemonModal from "./PokemonModal";
import { v4 as uuidv4 } from "uuid";

const PokemonCollection = ({ pokemon }) => {
  //modal pokemon data
  const [modalData, setModalData] = useState("");
  // pokemon details modal state
  const [modalShow, setModalShow] = useState(false);
  //pokemon set shiny
  const [shiny, setShiny] = useState(false);

  const cards = pokemon.map((poke) => {
    return (
      <Col
        onClick={() => {
          setModalData(poke);
        }}
        key={uuidv4()}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
      >
        <PokemonCard setModalShow={setModalShow} pokemon={poke} />
      </Col>
    );
  });
  return (
    <>
      <PokemonModal
        shiny={shiny}
        setShiny={setShiny}
        show={modalShow}
        modaldata={modalData}
        onHide={() => {
          setShiny(false);
          setModalShow(false);
        }}
      />

      <Row className="mx-4">{cards}</Row>
    </>
  );
};

export default PokemonCollection;
