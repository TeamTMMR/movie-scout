import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle,  } from "reactstrap";
import { useNavigate, useParams, NavLink } from "react-router-dom";

const MovieIndex = ({ movies }) => {

  const navigate = useNavigate()
  
  const handleCoverClick = (movieID) => {
    // navigate(`/movieshow/${movieID}`)
  }
  
  const handleDetailsNav = () => {
    navigate()
  }

return (
    <main className="index-title">
      <h1> Movie List </h1>
      <div className="card-container">
      {movies?.map((movie, index) => {
        return (
          <NavLink className="card-nav-link" to={`/movieshow/${movie.id}`}>
          <Card
            style={{
            width: "18rem",
            }}
            key={index}
          >
            <img 
              className="movie-cover"
              alt="card with movie poster and title" 
              src={movie.img_url} 
              onClick={handleCoverClick(movie.id)}
            />
            <CardBody>
              <CardTitle tag="h5">{movie.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {movie.genre}
              </CardSubtitle>
              <NavLink to={`/movieshow/${movie.id}`}>
              <button className="more-details-button">
                More Details
              </button>
              </NavLink>
            </CardBody>
          </Card>
          </NavLink>
        );
      })}
      </div>

      
    </main>
  );
};

export default MovieIndex;
