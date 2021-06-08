import { useEffect, useState } from "react";



function Favorite(props) {
 
	const [favourites, setFavourites] = useState([]);


  const { title } = props;

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
        else{
            setFavourites(null);
        }

	}, [favourites]);

	const saveToLocalStorage = async (items) => {
	await	localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};
	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

        saveToLocalStorage(newFavouriteList);
		setFavourites(newFavouriteList);
		
	};
 

  return (
  <div className="row">
      <h2>{title}</h2>
     <div className="row__posters">
        {favourites && favourites.map((movie,index) => (
          <img
          key={index}
            onClick={() => {
                removeFavouriteMovie(movie)  }}
            className="row__poster row__posterLarge"
            src={movie.Poster}
            alt={movie.original_name}
          />
        ))}
      </div>

    </div>

  );
}

export default Favorite;