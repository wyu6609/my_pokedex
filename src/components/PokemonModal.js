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
          return obj.language.name === "en";
        }
      );

      let englishDescription = englishDescriptionObj.flavor_text.replace(
        "\f",
        " "
      );

      setPokemonDescription(englishDescription);

      setPokemonHabitat(
        response.data.habitat ? response.data.habitat.name : "Unknown"
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
          className={` ${props.modaldata.data.types[0].type.name}-text`}
        >
          <Modal.Header
            className={`${props.modaldata.data.types[0].type.name} text-white `}
          >
            <Badge className="pokemon-modal-id bg-secondary p-2">{`id ${props.modaldata.data.id} `}</Badge>
            <Modal.Title align="start" id="contained-modal-title-vcenter">
              <Button
                className="button_hover"
                onClick={() => {
                  let url = `https://pokemon.fandom.com/wiki/${props.modaldata.data.name}`;
                  window.open(url, "_blank");
                }}
              >
                <span className="text-uppercase pokemon-modal-name">
                  {props.modaldata.data.name}
                </span>
              </Button>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="pt-md-2">
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
                        className="text-white btn-xs mt-lg-5 ml-lg-5 mt-md-5 ml-md-5"
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
                      <p className="small">
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
                  className={`button_hover type-btn btn btn-xs text-uppercase  ${el.type.name}`}
                  onClick={() => {
                    console.log("click");

                    let url = `https://pokemon.fandom.com/wiki/${el.type.name}_type`;
                    window.open(url, "_blank");
                  }}
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
