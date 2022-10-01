import React, { useContext}from 'react'
import "./nav.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {movieContext} from "../context/movieContext"
function Nav() {
    const  { favoriteCount ,favoriteDataFetch} = useContext(movieContext)
    return (
        <div className = "nav-link-container">
            <div className = "links">
                <div className="logo">
                    <Router>
                        <Link to = "/" id = 'link'>Home</Link>
                    </Router>
                </div>
            </div>
            <div className="favorite" onClick={favoriteDataFetch }>
                <h3>Favorite: { favoriteCount}</h3>        
            </div>
        </div>
    )
}

export default Nav
