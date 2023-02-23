import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })
  it("has a welcome message", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const welcome = screen.getByText(/Movie Scout/i)
    expect(welcome).toBeInTheDocument()
  })
  it("has a button" , () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText(/Get Started/i))
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument()
  })
})