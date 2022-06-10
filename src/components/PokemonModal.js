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

  const clickHandler = () => {
    props.setShiny(!props.shiny);
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
      let englishDescriptionObj = response.data.flavor_text_entries.find(
        function (obj) {
          return obj.language.name == "en";
        }
      );

      let englishDescription = englishDescriptionObj.flavor_text.replace(
        "\f",
        " "
      );

      setPokemonDescription(englishDescription);

      let habitat = response.data.habitat
        ? response.data.habitat.name
        : "UNKNOWN";
      setPokemonHabitat(
        response.data.habitat ? response.data.habitat.name : "UNKNOWN"
      );

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
              <span className="pokemon-modal-id">{`id ${props.modaldata.data.id} `}</span>
              <span className="text-uppercase pokemon-modal-name">
                {props.modaldata.data.name}
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={6} s={6} md={6}>
                  <Row sx={6}>
                    <Col>
                      <img
                        src={
                          props.shiny
                            ? props.modaldata.data.sprites.front_shiny
                            : props.modaldata.data.sprites.front_default
                        }
                      />
                      <img
                        width="100"
                        src={
                          props.shiny
                            ? props.modaldata.data.sprites.back_shiny
                            : props.modaldata.data.sprites.back_default
                        }
                      />
                      <Button
                        variant={props.shiny ? "secondary" : "warning"}
                        className="text-white btn-xs mt-3 "
                        onClick={clickHandler}
                        size="sm"
                      >
                        {props.shiny ? "View Normal" : "View Shiny"}
                      </Button>
                    </Col>
                  </Row>
                </Col>

                <Col xs={6} s={6} md={6} lg>
                  {loading ? (
                    <>
                      <h5 className="text-capitalize text-md-start text-center pt-4 font-italic ">
                        Habitat: {pokemonHabitat}
                      </h5>
                      <p>
                        <small>{pokemonDescription}</small>
                      </p>
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
