import React from "react"
import { useParams, useNavigate } from "react-router-dom"

const MyMoviesShow = ({current_user, movies, deleteMovie, editMovie}) => {
  const { id } = useParams()
  let currentMovie = movies?.find((movie) => movie.id === +id)
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/mymovies")
  }
  const handleEdit = () => {
    navigate(`/movieedit/${id}`)
  }
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
            <button onClick={() => {
                handleEdit();
                }}> Edit Movie 
                </button>
            <button onClick={() => {
              deleteMovie(id);
              handleSubmit();
              }}> Delete Movie </button>

         
          <button className="see-all-button" onClick={handleSubmit}>
            See My Movies
         </button>
        </>
      )}
  
    </main>
  )
}

export default MyMoviesShow