import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'



const MovieSearch = () => {
  const [movieData, setMovieData] = useState({})

  const submitFn = (title) => {
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=a4b67ca`)
    .then(response => {
      return response.json()})
    .then(data => {
      setMovieData(data)
    })

  }

  return (
    <div>
      <SearchBar submitFn={submitFn} />
      <div className="movie-search-container">
        <img src={movieData.Poster}></img>
<br/>
        <div className="results-container">
          <div className="results-title">{movieData.Title}</div>
          <div className="search-info">
              <div>{movieData.Year}</div>
              <div>{movieData.Genre}</div>
            </div>
          <div className="results-runtime">{movieData.Runtime}</div>
          <div className="results-plot">{movieData.Plot}</div>
        </div>
      </div>
    </div>
  )
}

export default MovieSearch
