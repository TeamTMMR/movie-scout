import React from "react"
import { render } from "@testing-library/react"
import MovieIndex from "./MovieIndex"

describe("<MovieIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MovieIndex />, div)
  })
})