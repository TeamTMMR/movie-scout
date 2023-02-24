import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle,  } from "reactstrap";
import { NavLink } from "react-router-dom";

const MovieIndex = ({ movies }) => {
return (
    <main className="index-title">
      <h1> Movie List </h1>
      <div className="card-container">
      {movies?.map((movie, index) => {
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
              <NavLink to={`/movieshow/${movie.id}`} className="nav-link">
                See More Details
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
      </div>
    </main>
  );
};

export default MovieIndex;
