import React from "react"
import { screen, render } from "@testing-library/react"
import MovieEdit from "./MovieEdit"
import { BrowserRouter } from "react-router-dom"


describe("<MovieEdit />", () => {
const current_user = {
  id: 1,
}
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <MovieEdit current_user={current_user}  /> 
      </BrowserRouter>
    )
  })

  it("has a form description", () => {
    render(
      <BrowserRouter>
        <MovieEdit current_user={current_user}/>
      </BrowserRouter>
    )
    const upload = screen.getByText(/Edit/i)
    expect(upload).toBeInTheDocument()
  })
})