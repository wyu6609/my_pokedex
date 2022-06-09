import React, { useState, useEffect } from "react";
import { Container, Col, Row, Modal, Button } from "react-bootstrap";
import axios from "axios";
// function
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PokemonModal = (props) => {
  //set loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.modaldata) {
      let URL = props.modaldata.data.species.url;
      fetchDescription(URL);
    } else {
      console.log("null");
    }
  }, [props.modaldata]);

  //fetch pokemon description
  const fetchDescription = (URL_ENDPOINT) => {
    axios.get(URL_ENDPOINT).then((response) => {
      console.log(response.data);
      setLoading(true);
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-center"
    >
      <Modal.Header className="text-center" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modaldata
            ? capitalizeFirstLetter(props.modaldata.data.name)
            : ""}
        </Modal.Title>
        <Container></Container>
      </Modal.Header>
      <Modal.Body>
        <h4>Description</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PokemonModal;
