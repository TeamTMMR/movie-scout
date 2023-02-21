import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import MovieIndex from "./pages/MovieIndex";
import AboutUs from "./pages/AboutUs"
import MovieNew from "./pages/MovieNew"
import MyMovies from "./pages/MyMovies"
import NotFound from "./pages/NotFound"
import MovieShow from "./pages/MovieShow"
import MovieEdit from "./pages/MovieEdit"


const App = (props) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    readMovie()
  }, [])

  const readMovie = () => {
    fetch("/movies")
      .then((response) => response.json())
      .then((payload) => {setMovies(payload)})
      .catch((error) => console.log(error))
  }

  const createMovie = (newMovie) => {
    console.log("newMovie", newMovie)
    fetch("/movies", {
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then((payload) => readMovie())
    .catch((errors) => console.log("Movie create errors:", errors))
  }

    return (
      <BrowserRouter>
        <Header {...props} />
        <div className="main"> 
          <Routes>
            <Route exact path="/" element={<Home  />} />
            <Route path="/movieindex" element={<MovieIndex movies={movies}/>} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/movienew" element={<MovieNew current_user={props.current_user} createMovie={createMovie}/>} />
            <Route path="/mymovies" element={<MyMovies movies={movies} current_user={props.current_user}/>} />
            <Route path="/movieshow/:id" element={<MovieShow movies={movies} />} />
            <Route path="/movieedit/:id" element={<MovieEdit movies={movies} current_user={props.current_user}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    )
    
}

export default App
