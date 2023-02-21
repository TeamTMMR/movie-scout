import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle, Button } from "reactstrap";

const MyMovies = ({ movies, current_user }) => {
  const userMovies = movies?.filter((movie) => {
    return movie.user_id === current_user.id
  })
  
  return (
    <main>
      <h1> My Movie List </h1>
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
              <Button>More Details</Button>
            </CardBody>
          </Card>
        );
      })}
    </main>
  );
};

export default MyMovies;