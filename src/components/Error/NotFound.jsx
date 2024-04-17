import React from "react";
import {useNavigate} from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found position-relative">
      <img src="./img/404.png" alt="Page not found" className="notfound-img" />
      <button type="button" className="btn btn-primary notfound-btn-home" onClick={() => navigate("/")}>
        Home
      </button>
      <button type="button" className="btn btn-danger notfound-btn-back" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default NotFound;
