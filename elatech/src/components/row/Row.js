import { useEffect, useState } from "react";

function Row(props) {
  const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	

  const { title,onMovieSelected ,leafRoot} = props;

  useEffect(() => {

    const getMovieRequest = async () => {
      const url = `http://www.omdbapi.com/?s=${leafRoot||'matrix'}&apikey=6ec22ca9`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };
    getMovieRequest();
	}, [leafRoot,movies]);



	const saveToLocalStorage = async (items) => {
	await	localStorage.setItem('elatech-goodies', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
    
	};

  const onMovieClicked = (movie) => {
    onMovieSelected(movie);
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie,index) => (
          <img
          key={index}
            onClick={() => {
              addFavouriteMovie(movie);
              onMovieClicked(movie);
              
             }}
            className="row__poster row__posterLarge"
            src={movie.Poster}
            alt={movie.Poster}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
