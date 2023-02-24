import React from "react"
import { useParams, useNavigate } from "react-router-dom"

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
            <div className="info-box">
              <h2>{currentMovie.title} </h2>
              <div className="movie-numbers">
                <h4>{currentMovie.release_year}</h4>
                <h5>{currentMovie.run_time}</h5>
              </div>
              <h5>{currentMovie.genre}</h5>
              <p>Synopsis: {currentMovie.description}</p>
            </div>
          <div>
          <button className="see-all-movies" onClick={handleSubmit}>
            See All Movies
          </button>
          </div>
          </div>
        </>
      )}
  
    </main>
  )
}

export default MovieShow