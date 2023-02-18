import React from "react"
import { render, screen } from "@testing-library/react"
import MovieNew from "./MovieNew"
import { BrowserRouter } from "react-router-dom"

describe("<MovieNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MovieNew />, div)
  })
  it("has a form description", () => {
    render(
      <BrowserRouter>
        <MovieNew />
      </BrowserRouter>
    )
    const upload = screen.getByText(/Add/i)
    expect(upload).toBeInTheDocument()
  })
})