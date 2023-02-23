import React from "react"
import { NavLink, useNavigate } from "react-router-dom"


const Home = () => {
  

  return (
    <>
      <div className="welcome-container">
        <h1> Movie Scout </h1>
        <div className="welcome-text">
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </div>
        <NavLink
        to={'/movieindex'}
        className="return-link">
          <button className="welcome-button" >Get Started</button>
        </NavLink>
      </div>
    
    </>
  )
}

export default Home