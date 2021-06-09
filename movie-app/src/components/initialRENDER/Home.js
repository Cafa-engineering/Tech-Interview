import React from 'react'
import "./home.css"
import defaultImage from "../../assest/defaultImage.png"
import wallpaper_1 from "../../assest/wallpaper_1.jpg"
function Home(props) {

    const initialRender =[0,1,2]
    
    return (
        <>
            {
                props.movies.map((mov, index) => {
                    const { Title, Poster, Type, Year } = mov
                
                
                
                    return (
                        <div className = "compound-container">
                            <div className="home-container" key = {index} style={{ backgroundImage:"url("+wallpaper_1+")"}}>                           
  
                            <img src={Poster} alt={Title} className="image-style-initial"  id = "image-to-animate"
                               onError={(event)=>event.target.setAttribute("src",defaultImage)}
                                                        
                            />
      
                               
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
