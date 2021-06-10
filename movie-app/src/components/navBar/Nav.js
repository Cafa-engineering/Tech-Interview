import React, { useContext}from 'react'
import "./nav.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {movieContext} from "../context/movieContext"


function Nav() {
    const  { favoriteCount ,favoriteDataFetch} = useContext(movieContext)
  
    

    return (
        <div className = "nav-link-container">
            <div className = "links">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="items-links">
                      <ul className = "nav-link-items">
                <li>
                    <Link to="/" id = "link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/contact" id = "link">
                        Contact
                    </Link>
                </li>

            </ul>
                    
                    
                </div>

            </div>
            <div className = "accounts">
                <button id = "account-btn">Sign In</button>
                  <button id = "account-btn">Sign Up</button>
                 
            </div>
            <div className="favorite" onClick={favoriteDataFetch }>
                <h3>Favorite: { favoriteCount}</h3>
                 
            </div>
            
            
        </div>
    )
}

export default Nav
