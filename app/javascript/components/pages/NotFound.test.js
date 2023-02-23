import React from "react"
import { screen, render } from "@testing-library/react"
import NotFound from "./NotFound"
import { BrowserRouter } from "react-router-dom"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    jest.mock("../assets/404.png", () => "image")
    const div = document.createElement("div")
    render(<NotFound />, div)
  })
  it("displays a 404 error", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const error = screen.getByText(/404/)
    expect(error).toBeInTheDocument()
  })
})