import React from "react"
import { useNavigate } from "react-router-dom"


const Home = () => {
  
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/movieindex")
  }
  return (
    <>
      <div className="welcome-container">
        <h1> Movie Scout </h1>
        <br/>
        <div className="welcome-text">
        <p> Welcome to Movie Scout, the ultimate destination for movie buffs and couch potatoes alike! Here you'll find a treasure trove of films, ranging from critically acclaimed masterpieces to guilty pleasure flicks that you secretly adore. Our platform is the perfect place to discover new movies to add to your watch list, or share your favorites with the world. So, grab some popcorn, kick back, and start exploring our collection today! </p>
        </div>
        <br/>
        <button className="welcome-button" onClick={handleSubmit}>Get Started</button>
        <br/>
      </div>
    
    </>
  )
}

export default Home