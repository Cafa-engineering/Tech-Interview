import SearchBox from '../SearchBox';
import React from 'react';

function Nav(props) {

  return (  
    <div className="nav false">
      <img
        className="nav__logo"
        src="/logo.png"
        alt=""
      />
      <SearchBox searchValue={props.searchValue} handleChange={props.handleChange}/>
      <img
        className="nav__avatar"
        src="/E.png"
        alt=""
      />
    </div>
  );
}

export default Nav;
