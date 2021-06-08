import React from 'react'
import "./main.css"
function Header(props) {
  const handleClick = () => {
    // props.setIsLoadMore(false)
    // props.setIsLoaded(false)
    // props.setIsInitialRender(true)
    console.log('clicked')
  
  }

    return (
        <div className = "header" onClick={handleClick}>
          <h1>Movies</h1>
             
        </div>
    )
}

export default Header
