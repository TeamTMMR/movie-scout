import React, { useState } from "react"
import {
  Form, 
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} 
from 'reactstrap'
import { useNavigate, useParams } from "react-router-dom"


const MovieEdit = ({current_user, movies, updateMovie}) => {

  const {id} = useParams()
  let currentMovie = movies?.find(movie => movie.id === +id)

  const [editMovie, setEditMovie] = useState({
    title: currentMovie?.title,
    genre: currentMovie?.genre,
    release_year: currentMovie?.release_year,
    run_time: currentMovie?.run_time,
    description: currentMovie?.description,
    img_url: currentMovie?.img_url,
    user_id: current_user.id,
  })

  const handleChange = (e) => {
    setEditMovie({...editMovie, [e.target.name]: e.target.value})
  }
  
  const navigate = useNavigate()

  const handleSubmit = () => {
    updateMovie(editMovie, currentMovie.id)
    navigate(`/movieshow/${currentMovie.id}`)
  }

  return (
    <>
    <h2>Edit Movie</h2>
      <div className="form">
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="title">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder={currentMovie?.title}
                  type="text"
                  onChange={handleChange} 
                  value={editMovie.title}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="genre">
                  Genre
                </Label>
                <Input
                  id="genre"
                  name="genre"
                  placeholder={currentMovie?.genre}
                  type="text"
                  onChange={handleChange} 
                  value={editMovie.genre}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="releaseYear">
                  Release Year
                </Label>
                <Input
                  id="releaseYear"
                  name="release_year"
                  placeholder={currentMovie?.release_year}
                  type="number"
                  onChange={handleChange} 
                  value={editMovie.release_year}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="runTime">
                  Run Time
                </Label>
                <Input
                  id="runTime"
                  name="run_time"
                  placeholder={currentMovie?.run_time}
                  type="text"
                  onChange={handleChange} 
                  value={editMovie.run_time}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="description">
              Description
            </Label>
            <Input
              id="description"
              name="description"
              placeholder={currentMovie?.description}
              type="text"
              onChange={handleChange} 
              value={editMovie.description}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">
              Image URL
            </Label>
            <Input
              id="image"
              name="img_url"
              placeholder={currentMovie?.img_url}
              type="text"
              onChange={handleChange} 
              value={editMovie.img_url}
            />
          </FormGroup>
          <Button onClick={handleSubmit}>
            Update Movie
          </Button>
        </Form>
      </div>
    </>
  )
}

export default MovieEdit