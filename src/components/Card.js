import React from "react";
import "./styles.css"
import { purchaseFunction } from "../api";

const Card = ({ title, slug }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <button className="button" onClick={() => purchaseFunction(slug)}>
        Buy Item
      </button>
    </div>
  );
};

export default Card;
