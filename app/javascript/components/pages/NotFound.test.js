import React from "react"
import { screen, render } from "@testing-library/react"
import NotFound from "./NotFound"

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<NotFound />, div)
  })
})