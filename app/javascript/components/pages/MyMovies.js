import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
const MyMovies = ({ movies, current_user }) => {
  const userMovies = movies?.filter((movie) => {
    return movie.user_id === current_user.id
  })
  
  return (
    <main className="index-title">
      <h1> My Movie List </h1>
      <div className="card-container">
      {userMovies?.map((movie, index) => {
        return (
          <Card
            style={{
              width: "18rem",
            }}
            key={index}
          >
            <img alt="card with movie poster and title" src={movie.img_url} />
            <CardBody>
              <CardTitle tag="h5">{movie.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {movie.genre}
              </CardSubtitle>
              <NavLink to={`/mymoviesshow/${movie.id}`}>More Details</NavLink>
            </CardBody>
          </Card>
        );
      })}
      </div>
    </main>
  );
};

export default MyMovies;