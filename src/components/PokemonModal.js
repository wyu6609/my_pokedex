import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Modal,
  Button,
  Badge,
  Spinner,
} from "react-bootstrap";
import "./PokemonModal.css";

import axios from "axios";
// function
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PokemonModal = (props) => {
  //set loading
  const [loading, setLoading] = useState(false);
  //set pokemon Description
  const [pokemonDescription, setPokemonDescription] = useState("");

  //set pokemon types
  const [pokeType1, setPokeType1] = useState("");
  const [pokeType2, setPokeType2] = useState("");

  useEffect(() => {
    if (props.modaldata) {
      let URL = props.modaldata.data.species.url;
      fetchDescription(URL);
      setPokeType1(props.modaldata.data.types[0].type.name);
      setPokeType2(props.modaldata.data.types[1].type.name);
    } else {
      console.log("null");
    }
  }, [props.modaldata]);

  //fetch pokemon description
  const fetchDescription = (URL_ENDPOINT) => {
    axios.get(URL_ENDPOINT).then((response) => {
      setPokemonDescription(response.data.flavor_text_entries[0].flavor_text);
      setLoading(true);
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="text-center" closeButton>
        <Modal.Title align="start" id="contained-modal-title-vcenter">
          {props.modaldata ? (
            <Container className="pokemon-modal-header">
              <span className="pokemon-modal-id">{`id ${props.modaldata.data.id} `}</span>
              <span className="text-uppercase pokemon-modal-name">
                {capitalizeFirstLetter(props.modaldata.data.name)}
              </span>
            </Container>
          ) : (
            ""
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12}>
              <Container>
                {props.modaldata ? (
                  <Row>
                    <Col>
                      <img
                        width="100"
                        className="bg-light  rounded-circle"
                        src={props.modaldata.data.sprites.front_default}
                      />
                    </Col>
                    <Col>
                      <img
                        className="bg-light  rounded-circle"
                        src={props.modaldata.data.sprites.back_default}
                      />
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
              </Container>
            </Col>
            <Col xs={12}>
              {loading ? (
                <>
                  <h4 className="text-lowercase font-italic">Description</h4>
                  <p>{props.modaldata ? pokemonDescription : ""}</p>
                </>
              ) : (
                <Spinner
                  animation="border"
                  variant="danger"
                  className="mx-auto "
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="mx-auto ">
        <Button size="sm" className={`type-btn text-uppercase  ${pokeType1}`}>
          {pokeType1}
        </Button>
        <Button size="sm" className={`type-btn ${pokeType2} text-uppercase  `}>
          {pokeType2}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PokemonModal;
