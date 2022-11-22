import React from "react";
import "./Card.css";

const Card = (prop) => {
  const styleClassNames = "card " + prop.className;
  return <div className={styleClassNames}>{prop.children}</div>;
};

export default Card;
