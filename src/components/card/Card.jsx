import React from "react";
import "./Card.css";

const Card = ({ onClick, item = {}, keyName = "" }) => {
  return (
    <div onClick={onClick} className="item">
      {item[keyName]}
    </div>
  );
};

export default Card;
