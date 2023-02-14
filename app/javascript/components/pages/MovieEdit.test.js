import React from "react"
import { render } from "@testing-library/react"
import MovieEdit from "./MovieEdit"

describe("<MovieEdit />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MovieEdit />, div)
  })
})