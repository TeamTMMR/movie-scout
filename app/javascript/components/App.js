import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import MovieIndex from "./pages/MovieIndex";
import AboutUs from "./pages/AboutUs"
import MovieNew from "./pages/MovieNew"


const App = (props) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    readMovies()
  }, [])

  const readMovies = () => {
    fetch("/movies")
      .then((response) => response.json())
      .then((payload) => {setMovies(payload)})
      .catch((error) => console.log(error))
  }

    return (
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route exact path="/" element={<Home  />} />
          <Route path="/movieindex" element={<MovieIndex movies= {movies} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/movienew" element={<MovieNew />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
    
}

export default App
