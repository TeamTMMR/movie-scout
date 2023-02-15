import React from "react"
import { render, screen } from "@testing-library/react"
import MovieIndex from "./MovieIndex"
import { BrowserRouter } from "react-router-dom"

describe("<MovieIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
      <MovieIndex />
      </BrowserRouter>,
      div
    )
  })
  it("has a movie list", () => {
    render(
      <BrowserRouter>
        <MovieIndex />
      </BrowserRouter>
    )
    const details = screen.getByText(/movie list/i)
    expect(details).toBeInTheDocument()
  })
})