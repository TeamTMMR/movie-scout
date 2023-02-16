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
end
