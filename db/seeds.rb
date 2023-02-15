    
    user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")

    movies = [
      {
        title:"The Godfather",
        release_year: 1972,
        genre:"Drama",
        run_time:"2h 55m",
        description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        img_url:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        user_id: 1,
      },
      {
        title:"Top Gun: Maverick",
        release_year: 2022,
        genre:"Action/adventure",
        run_time:"2h 11m",
        description:"After more than 30 years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        img_url:"https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        user_id: 1,
      },
      {
        title:"Bullet Train",
        release_year: 2022,
        genre:"Action/Thriller",
        run_time:"2h 6m",
        description:"Ladybug is an unlucky assassin who's determined to do his job peacefully after one too many gigs has gone off the rails. Fate, however, may have other plans as his latest mission puts him on a collision course with lethal adversaries from around the globe -- all with connected yet conflicting objectives -- on the world's fastest train.",
        img_url:"https://m.media-amazon.com/images/M/MV5BOTBhZGJjYjQtODRjOC00MWJhLTk1NTctZDJiM2JkMTY3MGNiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
        user_id: 1,
      }
    ]
    
    movies.each do |movie|
      user.movies.create(movie)
      p "creating: #{movie}"
    end
    