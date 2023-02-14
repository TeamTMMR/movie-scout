import React from "react"
import { render } from "@testing-library/react"
import MovieNew from "./MovieNew"

describe("<MovieNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MovieNew />, div)
  })
})