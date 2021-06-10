import React from 'react'
import "./main.css"
function Search(props) {
    const handleSearch = (e) => {
        props.setSearchValue(e.target.value)
        props.setIsLoaded(true)
        props.setIsInitialRender(false)
        props.setIsFavorite(false)
        
    }
            
            // <div id="search-favorite" >
            //     <button id ="cart" >Download</button>
            // </div>
   
    return (
        <div className="search">
            <input type="text" className="input"
                placeholder="Search here"
                value = {props.searchValue}
                onChange={handleSearch}
                ref={props.inputSearchRef}


               
            />
            <div id = "header">
                 <h2 >The best movies</h2>
            </div>

            
            
        </div>
    )
}

export default Search
