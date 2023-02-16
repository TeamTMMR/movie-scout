import React from "react"
import { useParams } from "react-router-dom"

const MovieShow = ({movies}) => {
  const { id } = useParams()
  let currentMovie = movies?.find((movie) => movie.id === +id)
 
  return (
    <>
      <h3>Movie Show</h3>
      

    </>
  )
}

export default MovieShow