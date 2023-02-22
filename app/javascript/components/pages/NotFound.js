import React from "react"
import notfoundpic from "../assets/404.png"

const NotFound = () => {
  return (
    <>
      <h3>404 Error Page Not Found</h3>
      <div className="error">
        <img src={notfoundpic}/>
      </div>
    </>
  )
}

export default NotFound