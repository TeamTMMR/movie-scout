require 'rails_helper'

RSpec.describe Movie, type: :model do
  it 'is not valid without a title' do
    movie = Movie.create(
      release_year: 2016,
      genre:"Drama",
      run_time:"2:55m",
      description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      img_url:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      user_id:0,
    ) 
    expect(movie.errors[:title]).to_not be_empty
  end
  it 'is not valid without a release year' do
    movie = Movie.create(
      title:"The Godfather",
      genre:"Drama",
      run_time:"2:55m",
      description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      img_url:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      user_id:0,
    ) 
    expect(movie.errors[:release_year]).to_not be_empty
  end 
  it 'is not valid without a genre' do
    movie = Movie.create(
      title:"The Godfather",
      release_year: 2016,
      run_time:"2:55m",
      description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      img_url:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      user_id:0,
    ) 
    expect(movie.errors[:genre]).to_not be_empty
  end 
  it 'is not valid without a run time' do
    movie = Movie.create(
      title:"The Godfather",
      release_year: 2016,
      genre:"Drama",
      description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      img_url:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      user_id:0,
    ) 
    expect(movie.errors[:run_time]).to_not be_empty
  end 
  it 'is not valid without a description' do
    movie = Movie.create(
      title:"The Godfather",
      release_year: 2016,
      genre:"Drama",
      run_time:"2:55m",
      img_url:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      user_id:0,
    ) 
    expect(movie.errors[:description]).to_not be_empty
  end 
  it 'is not valid without an img url' do
    movie = Movie.create(
      title:"The Godfather",
      release_year: 2016,
      genre:"Drama",
      run_time:"2:55m",
      description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      user_id:0,
    ) 
    expect(movie.errors[:img_url]).to_not be_empty
  end 
  it 'is not valid without a user id' do
    movie = Movie.create(
      title:"The Godfather",
      release_year: 2016,
      genre:"Drama",
      run_time:"2:55m",
      description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      img_url:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    ) 
    expect(movie.errors[:user_id]).to_not be_empty
  end  
end
