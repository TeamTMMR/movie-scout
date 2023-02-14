import React from "react"
import { render } from "@testing-library/react"
import MovieShow from "./MovieShow"

describe("<MovieShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MovieShow />, div)
  })
})