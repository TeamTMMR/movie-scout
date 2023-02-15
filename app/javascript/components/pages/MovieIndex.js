import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle, Button } from "reactstrap";

const MovieIndex = ({ movies }) => {
  return (
    <main>
      <h1> Movie List </h1>
      {movies?.map((movie, index) => {
        return (
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="card with movie poster and title" src={movie.img_url} />
            <CardBody>
              <CardTitle tag="h5">{movie.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {movie.genre}
              </CardSubtitle>
              <Button>More Details</Button>
            </CardBody>
          </Card>
        );
      })}
    </main>
  );
};

export default MovieIndex;
