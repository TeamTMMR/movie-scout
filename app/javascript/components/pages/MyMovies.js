import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle} from "reactstrap";
import { useParams, useNavigate, NavLink } from "react-router-dom";


const MyMovies = ({ movies, current_user }) => {
  
  const userMovies = movies?.filter((movie) => {
    return movie.user_id === current_user.id
  })
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDetailsNav = () => {
    navigate("/mymoviesshow/" + id)
  }
  return (
    <main className="index-title">
      <h1> My Movies </h1>
      <div className="card-container">
      {userMovies?.map((movie, index) => {
        return (
          <NavLink className="more-details-nav-link" to={`/movieshow/${movie.id}`}>
          <Card className="my-movie-card"
            style={{
              width: "18rem",
            }}
            key={index}
          >
            <img className="movie-cover"
            alt="card with movie poster and title" 
            src={movie.img_url} />
            <CardBody>
              <CardTitle tag="h5">{movie.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {movie.genre}
              </CardSubtitle>
              <button className="more-details-button" onClick={handleDetailsNav}>
                More Details
              </button>
            </CardBody>
          </Card>
          </NavLink>
        );
      })}
      </div>
    </main>
  );
};

export default MyMovies;