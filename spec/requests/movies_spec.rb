require 'rails_helper'

RSpec.describe "Movies", type: :request do
    let(:user) do
        User.create email: 'fake123@gmail.com', password: 'ABC123', password_confirmation: 'ABC123'
    end
    
    describe "GET /index" do
        it "gets a list of movies" do
            Movie.create(
                title: "The Godfather",
                release_year: 1972,
                genre: "Drama",
                run_time: "2h 55m",
                description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
                img_url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                user_id: user.id,
            )

            get '/movies'

            movie = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(movie.length).to eq 1
        end
    end
    describe "POST /create" do
        it "creates a movie" do
            movie_params = {
                movie:{
                    title: "The Godfather",
                    release_year: 1972,
                    genre: "Drama",
                    run_time: "2h 55m",
                    description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
                    img_url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                    user_id: user.id,
                }
            }

            post '/movies', params: movie_params

            expect(response).to have_http_status(200)
            movie = Movie.first
            expect(movie.title).to eq ("The Godfather")
        end
    end

    describe "PATCH /update" do
        it "updates a movie" do
            movie_params = {
                movie:{
                    title: "The Godfather",
                    release_year: 1972,
                    genre: "Drama",
                    run_time: "2h 55m",
                    description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
                    img_url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                    user_id: user.id,
                }
            }

            post '/movies', params: movie_params
            movie = Movie.first

            new_movie_params = {movie:{
                title: "Godfather",
                release_year: 1972,
                genre: "Drama",
                run_time: "2h 55m",
                description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
                img_url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                user_id: user.id,
            }}

            patch "/movies/#{movie.id}", params: new_movie_params
            expect(response).to have_http_status(200)
            mov = Movie.first
            expect(mov.title).to eq 'Godfather'
        end
    end

    describe "DELETE /destroy" do
        it "deletes a movie" do
            movie_params = {
                movie:{
                    title: "The Godfather",
                    release_year: 1972,
                    genre: "Drama",
                    run_time: "2h 55m",
                    description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
                    img_url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                    user_id: user.id,
                }
            }

            post '/movies', params: movie_params
            movie = Movie.first

            delete "/movies/#{movie.id}" 
            expect(response).to have_http_status(200)
        end
    end

end
