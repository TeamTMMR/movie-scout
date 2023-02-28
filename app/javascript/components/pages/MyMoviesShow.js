import React from "react"
import { useParams, useNavigate} from "react-router-dom"

const MyMoviesShow = ({current_user, movies, deleteMovie}) => {
  const { id } = useParams()
  let currentMovie = movies?.find((movie) => movie.id === +id)

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/mymovies")
  }
  const handleEditNav = () => {
    navigate("/movieedit/" + id)
  }
  const handleDeleteNav = () => {
    deleteMovie(id)
    navigate("/mymovies")
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
         

          <div className="buttons-container">
          <button className="edit-movie-button" onClick={handleEditNav}>
            Edit Movie
          </button>
          <button className="delete-movie-button" onClick={handleDeleteNav}> Delete Movie </button>
          </div>

          <button className="see-all-button" onClick={handleSubmit}>
            See My Movies
          </button> 
          </div>
        </>
      )}
  
    </main>
  )
}
export default MyMoviesShow