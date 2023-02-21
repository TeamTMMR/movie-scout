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
import { useNavigate } from "react-router-dom"

const MovieNew = ({current_user}) => {

  const navigate = useNavigate()
  const [newMovie, setNewMovie] = useState({
    title: '',
    genre: '',
    release_year: '',
    run_time: '',
    description: '',
    img_url: '',
    user_id: current_user.id,
  })

  const handleChange = (e) => {
    setNewMovie({...newMovie, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    navigate("/mymovies")
  }

  return (
    <>
    <h2>Add a Movie</h2>
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
                  placeholder="Movie Title"
                  type="title"
                  onChange={handleChange} 
                  value={newMovie.title}
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
                  placeholder="Movie Genre"
                  type="genre"
                  onChange={handleChange} 
                  value={newMovie.genre}
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
                  name="releaseYear"
                  placeholder="Movie Release Year"
                  type="releaseYear"
                  onChange={handleChange} 
                  defaultValue={newMovie.release_year}
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
                  name="runTime"
                  placeholder="Movie Run Time"
                  type="runTime"
                  onChange={handleChange} 
                  defaultValue={newMovie.run_time}
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
              placeholder="Description of Movie"
              type="description"
              onChange={handleChange} 
              value={newMovie.description}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">
              Image URL
            </Label>
            <Input
              id="image"
              name="image"
              placeholder="Image URL Here"
              onChange={handleChange} 
              defaultValue={newMovie.img_url}
            />
          </FormGroup>
          <Button onClick={handleSubmit}>
            Upload Movie
          </Button>
        </Form>
      </div>
    </>
  )
}

export default MovieNew