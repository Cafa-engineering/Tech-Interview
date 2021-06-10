import React, { useState, useEffect } from "react";
import axios from "axios";
import { HomeContainer } from "./Homepage.style";
import CardList from "../components/Card-list/CardList.component";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const movieResults = await axios.get("http://www.omdbapi.com/", {
        params: {
          apikey: "4ff57a4c",
          s: "avengers",
        },
      });

      setMovies(movieResults.data.Search);
      console.log(movies);
    };

    if (isInitialRender) {
      fetchData();
      setIsInitialRender(false);
    }
  }, []);

  return (
    <HomeContainer>
      <CardList movies={movies} />
    </HomeContainer>
  );
};

export default HomePage;
