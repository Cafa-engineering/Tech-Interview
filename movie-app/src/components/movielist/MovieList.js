import React from 'react'
import "./movie.css"
import defaultImage from "../../assest/defaultImage.png"
import PropTypes from "prop-types"
function MovieList(props) {
    console.log(props.movies)
    return (
        <>
            {
                props.movies.map((mov, index) => {
                    const { Title, Poster, Type, Year } = mov
                
                
                
                    return (
                        <div className="container" key = {index}>                           
                            <img src={Poster} alt={Title} className="image-style"
                               onError={(event)=>event.target.setAttribute("src",defaultImage)}
                                                        
                            />
                            <div className = "title-year">
                                <h6 className="title title-Title">{Title}</h6>
                                <h6 className="title">{Year}</h6>
                                 <h6 className="title">{ Type}</h6>
                            </div>
                               
                       </div>
                   )
                    
                } )

            }
            
            
        </>
    )
}
MovieList.propTypes = {
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Type:PropTypes.string.isRequired  
}

export default MovieList
