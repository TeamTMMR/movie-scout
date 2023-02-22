import React from "react"
import { render, screen } from "@testing-library/react"
import MyMoviesShow from "./MyMoviesShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import userEvent from "@testing-library/user-event"


const mockMovie = [
  {
    id: 1,
    title:"The Godfather",
    release_year: 1972,
    genre:"Drama",
    run_time:"2h 55m",
    description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    img_url:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    user_id: 1,
  }
]

const user = {
  id: 1,
  email: "test@example.com",
  password: "password", 
  password_confirmation: "password"
}
const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/mymoviesshow/1"]}>
      <Routes>
        <Route path= "mymoviesshow/:id" element={<MyMoviesShow movies={mockMovie} current_user={user} />} />
      </Routes>
    </MemoryRouter>
  )
}
describe("MyMoviesShow", (user) => {
  it("renders without crashing", () => {
    renderShow()
  })
  it("has a movie's description", () => {
    renderShow()
    const desc = screen.getByText(/Synopsis/i)
    expect(desc).toBeInTheDocument()
  })
  it("has clickable links" , () => {
    renderShow()
    userEvent.click(screen.getByText(/See All Movies/i))
    expect(screen.getByText(/See All Movies/i)).toBeInTheDocument()
    userEvent.click(screen.getByText(/delete movie/i))
    expect(screen.getByText(/delete movie/i)).toBeInTheDocument()
    userEvent.click(screen.getByText(/edit/i))
    expect(screen.getByText(/edit/i)).toBeInTheDocument()
  })
})