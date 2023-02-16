import React from "react"
import { render } from "@testing-library/react"
import MyMovies from "./MyMovies"

describe("<MyMovies />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MyMovies />, div)
  })
})