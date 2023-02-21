class MoviesController < ApplicationController

    def index 
        movies = Movie.all 
        render json: movies
    end

    def create
        movie = Movie.create(movie_params)
        if movie.valid? 
            render json: movie
        else 
            render json: movie.errors, status:422
        end
    end

    def update
        movie = Movie.find(params[:id])
        movie.update(movie_params)
        if movie.valid? 
            render json: movie
        else
            render json: movie.errors, status:422
        end
    end

    def destroy
        movie = Movie.find(params[:id])
        movie.destroy
        render json: Movie.all
    end
    
    private 
    def movie_params 
        params.require(:movie).permit(:title, :release_year, :genre, :run_time, :description, :img_url, :user_id)
    end 

end
