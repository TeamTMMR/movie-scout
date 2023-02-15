import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })
  it("has a welcome message", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const welcome = screen.getByText(/Welcome/i)
    expect(welcome).toBeInTheDocument()
  })
})