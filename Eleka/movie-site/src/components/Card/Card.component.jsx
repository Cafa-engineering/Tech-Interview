import React from "react";
import { CardContainer } from "./Card.style";

const Card = (props) => {
  return (
    <CardContainer>
      <img src={props.movie.Poster} alt='' width="100%" height="100%" />
      {props.movie.Title}
    </CardContainer>
  );
};

export default Card;
