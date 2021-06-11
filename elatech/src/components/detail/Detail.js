
import { useEffect, useState } from "react";
function Detail(props) {
  const { movie, onDetailClosed } = props;
const [des,setDes]=useState([]);
  

  useEffect(()=>{
    const description= async()=>{
      const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=263d22d8`;
      const response = await fetch(url);
      
      const responseJson = await response.json();
      // console.log(responseJson);
      if (responseJson) {
        setDes(responseJson);
        console.log(des);
      }
  
    }

    description();
  }
    ,[movie.imdbID])
console.log('hello');

  return (
    <div className="detail">
      <div className="detail__image" style={{backgroundImage: `url(${movie.Poster})`}}>
        <span className="detail__title">
          {movie.original_name}
        </span>
      </div>
      <div className="banner--fadeBottom detail__fade-image"></div>
      <div className="detail__actions">
        <button className="detail__btn mgr-8">Play</button>
        <button className="detail__btn" onClick={onDetailClosed}>Back</button>
      </div>
      <div className="detail__description">
        <div className="detail__description-title">Description</div>
        <p className="detail__description-content">
          {des.Plot}
        </p>
      </div>
    </div>
  );
}

export default Detail;