import React from "react"
import { render, screen } from "@testing-library/react"
import MyMovies from "./MyMovies"
import { BrowserRouter } from "react-router-dom"

describe("<MyMovies />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MyMovies />, div)
  })
  it("has a movie list", () => {
  render(
    <BrowserRouter>
      <MyMovies />
    </BrowserRouter>
  )
  const details = screen.getByText(/movie list/i)
  expect(details).toBeInTheDocument()
  })
})
