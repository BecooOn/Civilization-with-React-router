import React from "react";
import "./Civilizations.scss";
import civilizations from "../../helper/civilizations";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Civilizations = () => {
  console.log(civilizations);
  return (
    <div>
      {civilizations.map((civilization) => (
        <Card key={civilization.id} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={civilization.image}
            width={"200px"}
            height={"250px"}
          />
          <Card.Body>
            <Card.Title>{civilization.name}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Civilizations;
