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
import { v4 as uuidv4 } from "uuid";
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
  // set pokemon habitat
  const [pokemonHabitat, setPokemonHabitat] = useState("");

  //shiny state
  const [shiny, setShiny] = useState(false);
  const clickHandler = () => {
    setShiny(!shiny);
  };

  useEffect(() => {
    if (props.modaldata) {
      let URL = props.modaldata.data.species.url;
      console.log(URL);
      fetchDescription(URL);
    }
  }, [props.modaldata]);

  //fetch pokemon description
  const fetchDescription = (URL_ENDPOINT) => {
    axios.get(URL_ENDPOINT).then((response) => {
      setPokemonDescription(
        response.data.flavor_text_entries[1].flavor_text.replace("\f", " ")
      );

      setPokemonHabitat(response.data.habitat.name);

      setLoading(true);
    });
  };

  return (
    <>
      {props.modaldata ? (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className={`${props.modaldata.data.types[0].type.name}-text`}
        >
          <Modal.Header
            className={`${props.modaldata.data.types[0].type.name} text-white `}
          >
            <Modal.Title align="start" id="contained-modal-title-vcenter">
              <Container className="pokemon-modal-header">
                <span className="pokemon-modal-id">{`id ${props.modaldata.data.id} `}</span>
                <span className="text-uppercase pokemon-modal-name">
                  {props.modaldata.data.name}
                </span>
              </Container>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <Container>
                    <Row>
                      <Col className="pb-1">
                        <img
                          width="100"
                          className="bg-light  rounded-circle "
                          src={
                            shiny
                              ? props.modaldata.data.sprites.front_default
                              : props.modaldata.data.sprites.front_shiny
                          }
                        />
                      </Col>
                      <Col>
                        <img
                          className="bg-light  rounded-circle"
                          src={
                            shiny
                              ? props.modaldata.data.sprites.back_default
                              : props.modaldata.data.sprites.back_shiny
                          }
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>

                <Col xs={12} md={6}>
                  {loading ? (
                    <>
                      <h5 className="text-capitalize text-md-start text-center pt-4 font-italic ">
                        Habitat: {pokemonHabitat}
                      </h5>
                      <p>{props.modaldata ? pokemonDescription : ""}</p>
                      <Button
                        variant={shiny ? "warning" : "secondary"}
                        className="text-white"
                        onClick={clickHandler}
                        size="sm"
                      >
                        {shiny ? "View Shiny" : "View Normal"}
                      </Button>
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
          <Modal.Footer className=" border-0">
            {props.modaldata.data.types.map((el) => {
              return (
                <Button
                  key={uuidv4()}
                  className={`type-btn btn btn-xs text-uppercase  ${el.type.name}`}
                >
                  {el.type.name}
                </Button>
              );
            })}
          </Modal.Footer>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default PokemonModal;
