import React from "react";
import { Card } from "react-bootstrap";
const PokemonCard = ({ pokemon }) => {
  return (
    <Card className="gx-5">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick exampl</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
