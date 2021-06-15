import React from 'react'
import "./home.css"
import defaultImage from "../../assest/defaultImage.png"
function Home(props) {

    const initialRender =[0,1,2]
    
    return (
        <>
            {
                props.movies.map((mov, index) => {
                    const { Title, Poster, Type, Year } = mov
                
                
                
                    return (
                        <div className = "compound-container">
                            <div className="home-container" key = {index} >                           
                            {
                                initialRender.map((num, index) => {
                                    return (
                                        <img src={Poster} alt={Title} className="image-style-initial"
                               onError={(event)=>event.target.setAttribute("src",defaultImage)}
                                                        
                            />
                                    )
                                })
                            }
                            
                               
                            </div>
                         <div className = "initial-Title-year">
                                <h1 className="initial-title initial-Title-hover">{Title}</h1>
                                <h1 className="initial-title">{Year}</h1>
                                <h1 className="initial-title">{ Type}</h1>
                            </div>
                            
                        </div>
                   )
                    
                } )

            }
        </>
    )
}

export default Home
