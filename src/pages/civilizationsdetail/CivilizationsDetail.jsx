import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import civilizations from "../../helper/civilizations";
import "./CivilizationsDetail.scss";

const CivilizationsDetail = () => {
  const [civilization, setCivilization] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();
  // console.log(name);
  // console.log(civilization);

  const getCivilization = () => {
    const foundCivilization = civilizations.find((civ) => civ.name === name);
    setCivilization(foundCivilization);
    // console.log(foundCivilization);
  };
  useEffect(() => {
    getCivilization();
  }, []);

  return (
    <div className="civilization">
      <div className="civilization-info">
        <div className="civilization-img-div">
          <img
            className="civilization-img"
            src={civilization?.image}
            alt="img"
          />
        </div>
        <div className="civilization-details">
          <div className="info">
            <p>{civilization?.info}</p>
          </div>
          <div>
            <p>
              <span>Capital:</span>
              {civilization?.capital}
            </p>
          </div>
          <div>
            <p>
              <span>Foundation Year:</span>
              {civilization?.foundation_year}
            </p>
          </div>
          <div>
            <p>
              <span>Collapse Year :</span>
              {civilization?.collapse_year}
            </p>
          </div>
          <div>
            <p>
              <span>Important Sites:</span>
              {civilization?.important_sites?.length > 0
                ? civilization.important_sites.map((city, index) => (
                    <li key={index}>{city} </li>
                  ))
                : "No important sites available"}
            </p>
          </div>
        </div>
      </div>
      <div className="btns">
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="btn btn-warning" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  );
};

export default CivilizationsDetail;
