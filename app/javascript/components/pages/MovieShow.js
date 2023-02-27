import React from "react"
import { useParams, NavLink, useNavigate } from "react-router-dom"

const MovieShow = ({movies}) => {
  const { id } = useParams()
  let currentMovie = movies?.find((movie) => movie.id === +id)

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/movieindex")
  }
  return (
    <main> 
      {currentMovie && (
        <>
          <div className="show-container">
            <img 
              src={currentMovie.img_url}
              alt="movie cover"
            />
<br></br>
            <div className="show-info">
            <h2>{currentMovie.title} </h2>
              <div className="show-info-line">     
                <h4>{currentMovie.release_year}</h4>
                <h4>{currentMovie.genre}</h4>
              </div>      
            <h6>{currentMovie.run_time}</h6>
            <p>Synopsis: {currentMovie.description}</p>
          </div>
<br></br>
          <button className="see-all-button" onClick={handleSubmit}>
            See All Movies
          </button>
<br></br>
          </div>
        </>
      )}
  
    </main>
  )
}

export default MovieShow