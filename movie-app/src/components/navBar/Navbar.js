import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import Nav from './Nav'
import "./nav.css"
import SignUp from './SignUp';

function Navbar() {
    return (
        <div className = "nav-container ">
            <Router>
                <Nav/>
            <Switch>
            <Route path="/" exact component = {Home}>

            </Route>
            <Route path="contact/"  component = {Contact}>
                <Contact/>
            </Route>
            <Route path="login/" component = {Login}>
            </Route>
            <Route path="signup/" component = {SignUp}>
            </Route>
            </Switch>
        </Router>
        </div>

        
    )
}

export default Navbar
