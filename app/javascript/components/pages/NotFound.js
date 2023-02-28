import React from "react"
import notfoundpic from "../assets/404.png"
import { useNavigate } from "react-router-dom"


const NotFound = () => {
  const navigate = useNavigate()
  const handleReturn = () => {
    navigate("/")
  }
  
  return (
    <>
      <div className="error-container">
      <h1>404 Page Not Found</h1>
      <div className="error-pic">
        <img src={notfoundpic}/>
        </div>
      </div>
      <button className="back-button" onClick={handleReturn}>Go Home</button>
    </>
  )
}

export default NotFound