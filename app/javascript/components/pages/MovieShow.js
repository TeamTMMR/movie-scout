import React from "react"
import { useParams, NavLink } from "react-router-dom"

const MovieShow = ({movies}) => {
  const { id } = useParams()
  let currentMovie = movies?.find((movie) => movie.id === +id)

  return (
    <main> 
      {currentMovie && (
        <>
          <div className="show-container">
            <img 
            src={currentMovie.img_url}
            alt="movie cover"
            />
            <h2> {currentMovie.title} </h2>
            <h4>{currentMovie.release_year}</h4>
            <h5>{currentMovie.genre}</h5>
            <h6> {currentMovie.run_time} </h6>
            <p> {currentMovie.description} </p>
          </div>
          <NavLink 
          to={'/movieindex'} 
          className="return-link">
            See All Movies
          </NavLink>
        </>
      )}
  
    </main>
  )
}

export default MovieShow