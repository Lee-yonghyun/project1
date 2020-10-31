import React, { Component } from "react";
import Movie from "./Movie";

class App extends Component {
  state = {
    greeting: "hello!",
    movies: [
      {
        title: "Matrix",
        poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg",
      },
      {
        title: "Full Metal Jacket",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg",
      },
      {
        title: "yonghyun challenge",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg",
      },
      {
        title: "Star Wars",
        poster:
          "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg",
      },
    ],
  };

  render() {
    const { movies, greeting } = this.state;

    return (
      <div>
        {movies.map((movie) => {
          return (
            <Movie
              poster={movie.poster}
              title={movie.title}
              date={movies.length}
            />
          );
        })}
        <h1>{greeting}</h1>
      </div>
    );
  }
}

export default App;
