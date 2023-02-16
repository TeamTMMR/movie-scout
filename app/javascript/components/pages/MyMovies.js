import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle, Button } from "reactstrap";

const MyMovies = ({ movies, current_user, index }) => {
  const userMovies = movies?.find((movie) => {
    return movie.user_id === current_user.id
  })
  
  return (
    <main>
      <h1> My Movie List </h1>
      {movies?.map((userMovies, index) => {
        return (
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="card with movie poster and title" src={userMovie.img_url} />
            <CardBody>
              <CardTitle tag="h5">{userMovies.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {userMovies.genre}
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