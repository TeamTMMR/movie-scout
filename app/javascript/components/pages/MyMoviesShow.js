import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Button } from "reactstrap" 

const MyMoviesShow = ({current_user, movies, deleteMovie}) => {
  const { id } = useParams()
  let currentMovie = movies?.find((movie) => movie.id === +id)


  return (
    <main> 
    
      {currentMovie && current_user && (
        <>
          <div className="show-container">
            <img 
              src={currentMovie.img_url}
              alt="movie cover"
            />
            <h2>{currentMovie.title} </h2>
            <h4>{currentMovie.release_year}</h4>
            <h5>{currentMovie.genre}</h5>
            <h6>{currentMovie.run_time}</h6>
            <p>Synopsis: {currentMovie.description}</p>
          </div>

          <NavLink to={`/movieedit/${id}`}>Edit Movie</NavLink>
          <NavLink to={"/mymovies"}>
            <Button onClick={() => {deleteMovie(id)}}> Delete Movie </Button>
          </NavLink>

          <NavLink 
            to={'/movieindex'} 
            className="return-link"
          >
            See All Movies
          </NavLink>
        </>
      )}
  
    </main>
  )
}

export default MyMoviesShow