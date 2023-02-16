import React from "react"
import { render, screen} from "@testing-library/react"
import Header from "./Header"
import { BrowserRouter } from "react-router-dom"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Header />, div)
  })
  it("has a clickable links", () => {
    render(
      <BrowserRouter>
          <Header />
      </BrowserRouter>
    )
    const text = screen.getByText(/all movies/i)
    expect(text).toBeInTheDocument()
  })
})