import React, { useState, useRef, useEffect } from "react"
import Search from "./components/Search"
import Header from "./components/Header"
import MovieList from "./components/movielist/MovieList"
import {data} from "./data"
import "./App.css"
import Home from "./components/initialRENDER/Home"
import Navbar from "./components/navBar/Navbar"
import {movieContext} from "./components/context/movieContext"
function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isLoadMore, setIsLoadMore] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [favoriteCount, setFavoriteCount] = useState(0)
  const [indexFavoriteArray, setIndexFavoriteArray] = useState([])
  const [favoriteMovies, setFavoriteMovies] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)
  const inputSearchRef = useRef(null)
  const prevSearchRef = useRef('')
  const [isInitialRender, setIsInitialRender] = useState(true)
    useEffect(() => {
    if (isInitialRender) {
      getInitialMovies();
    }
    getMovieRequestPage_1(searchValue);
    prevSearchRef.current = searchValue;
    inputSearchRef.current.focus();
    


    

    }, [searchValue, isInitialRender])
  const addFavorite = (index, imdbID) => {
    setFavoriteCount(favoriteCount + 1)
    setFavoriteMovies([...favoriteMovies,movies[index]])


   

  }
  const favoriteDataFetch = () => {
    console.log("Clicked")
    setIsFavorite(true)
  }
  // console.log(favoriteMovies)

  
  const getMovieRequestPage_1 = async (searchValue) => {
    const url_1 = `http://www.omdbapi.com/?s=${searchValue}&apikey=aab92671&page=1`
    // const url = "http://www.omdbapi.com/?i=tt3896198&apikey=aab92671"
    
  
    const response_1 = await fetch(url_1)
    const responseJson_1 = await response_1.json()
    if (responseJson_1.Search) {
      movies.shift()
      setMovies(responseJson_1.Search)

    }

  }
  
  const getMovieRequestPage_2 = async ({ current }) => {
    setIsInitialRender(false)
    const url_2 = `http://www.omdbapi.com/?s=${searchValue}&apikey=aab92671&page=2`
    // const url = "http://www.omdbapi.com/?i=tt3896198&apikey=aab92671"
    const response_2 = await fetch(url_2)
    const responseJson_2 = await response_2.json()
   

    if (responseJson_2.Search) {
      for (let i = 0; i < responseJson_2.Search.length; i++) {
        if (i < 5) {
          movies.push(responseJson_2.Search[i])
          
          
        }

       
        
      }
      // console.log(movies)
      setIsLoadMore(true)
      setIsLoaded(false)
      setSearchValue('')
      
    }
    
  }
  const getInitialMovies = async () => {
    setMovies([])
    const initialUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=aab92671"
    const initialResponse = await fetch(initialUrl)
    const initialResponseJson = await initialResponse.json()
    setMovies([...movies, initialResponseJson])
   



  }


  return (
    <movieContext.Provider value={{favoriteCount, addFavorite,isFavorite,favoriteDataFetch }}>
          <div className="main-container">
       <Navbar/>
      <div className="head-container">
       
        <Header setIsInitialRender={setIsInitialRender} setIsLoadMore={setIsLoadMore}
          setIsLoaded ={setIsLoaded}
        />
        <Search searchValue={searchValue} setSearchValue={setSearchValue}
          inputSearchRef={inputSearchRef}
          setIsLoaded={setIsLoaded}
          setIsInitialRender={setIsInitialRender}
          favoriteCount={favoriteCount}
          favoriteDataFetch={favoriteDataFetch}
          setIsFavorite = {setIsFavorite}
        />
      </div>
      
      <div>
        <div className="div-container">
     
          {
            isInitialRender ? <Home movies={ movies }/> :  (
              <MovieList movies={ isFavorite ? favoriteMovies: movies}
                addFavorite = {addFavorite}
              />
            )
          }      
        </div>      
      </div>
      {
        isLoaded && (<button className="load-more-btn" onClick={getMovieRequestPage_2}>load  more</button>)
      }
    </div>
    </movieContext.Provider>

  );
}

export default App;
