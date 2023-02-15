    
    user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")

    movies = [
      {
        title:"The Godfather",
        release_year: 2016,
        genre:"Drama",
        run_time:"2:55m",
        description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        img_url:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        user_id:0,
      }
    ]
    
    movies.each do |movie|
      user.movies.create(movie)
      p "creating: #{movie}"
    end
    