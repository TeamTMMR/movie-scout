import React from "react"
import { render, screen } from "@testing-library/react"
import MovieShow from "./MovieShow"
import { BrowserRouter } from "react-router-dom"

describe("<MovieShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MovieShow />, div)
  })
  it("has a movie's cover image", () => {
    render(
      <BrowserRouter>
        <MovieShow />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL
    const cover = screen.getByRole("img")
    expect(cover).toHaveAttribute("alt", "movie cover")
  })
})