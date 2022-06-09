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

  // pokemon Description URL

  const cards = pokemon.map((poke) => {
    return (
      <Col
        onClick={() => {
          setModalData(poke);
        }}
        key={uuidv4()}
        xs={12}
        md={3}
        lg={2}
      >
        <PokemonCard setModalShow={setModalShow} pokemon={poke} />
      </Col>
    );
  });
  return (
    <>
      <PokemonModal
        show={modalShow}
        modaldata={modalData}
        onHide={() => setModalShow(false)}
      />
      <Container>
        <Row>{cards}</Row>
      </Container>
    </>
  );
};

export default PokemonCollection;
