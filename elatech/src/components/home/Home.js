import { useState} from 'react'
import Nav from "../nav/Nav";
import Header from "../header/Header";
import Row from "../row/Row";
import Favorite from '../row/favorite';
import Detail from '../detail/Detail';
import Footer from './Footer';
import LimitTen from "../row/movies10";

function Home() {
  const [selectedMovie, setSelectedMovie] = useState();
  const [searchValue, setSearchValue] = useState('');


  const handleChange=event=>{
    setSearchValue(event.target.value);
    // console.log(searchValue);

  }
  

  const selectMovie = (movie) => {
    setSelectedMovie(() => movie);
    console.log(selectedMovie);
  }

  const closeDetail = () => {
    setSelectedMovie(null);
  }
  
  return (
    <>
      <div className="app">
        <Nav searchValue={searchValue} handleChange={handleChange} />
        <Header />
        <LimitTen leafRoot={searchValue} title='ElaTech Goodies' onMovieSelected={selectMovie}/>
        <Row leafRoot={searchValue}  onMovieSelected={selectMovie} />
       
        <Favorite title='Playlist Watch-later' />
        <Footer />
      
      </div>
      {selectedMovie && <Detail movie={selectedMovie} onDetailClosed={closeDetail}/>}

    </>
  );
}

export default Home;
