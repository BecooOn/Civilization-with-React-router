import React from "react";
import { useNavigate } from "react-router-dom";
import "./Civilizations.scss";
import civilizations from "../../helper/civilizations";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Civilizations = () => {
  console.log(civilizations);
  const navigate = useNavigate();
  return (
    <div className="card-div">
      {civilizations?.map((civilization) => {
        const { id, name, image } = civilization;
        return (
          <Card key={id} style={{ width: "18rem" }} className="card">
            <Card.Img variant="top" src={image} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">{name}</Card.Title>
              <Button
                variant="warning"
                className="card-btn"
                onClick={() => navigate(`/civilizations/${name}`)}
              >
                Detail
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Civilizations;
