import React from "react";

import Card from "../Card/Card.component";
import { Cardlist } from "./CardList.style";

const CardList = (props) => {
  return (
    <Cardlist>
      {props.movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </Cardlist>
  );
};

export default CardList;
