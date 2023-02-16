class MoviesController < ApplicationController

    def index 
        movies = Movie.all 
        render json: movies
    end

    # def create
    # end

    # def update
    # end

    # def destroy
    # end

end
