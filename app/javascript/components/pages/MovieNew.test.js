import React from "react"
import { render, screen } from "@testing-library/react"
import MovieNew from "./MovieNew"
import { BrowserRouter } from "react-router-dom"

describe("<MovieNew />", () => {
  const current_user = {
    id: 1,
  }
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <MovieNew current_user={current_user} />
      </BrowserRouter>
    )
  })
  it("has a form description", () => {
    render(
      <BrowserRouter>
        <MovieNew current_user={current_user} />
      </BrowserRouter>
    )
    const upload = screen.getByText(/Add/i)
    expect(upload).toBeInTheDocument()
  })
})