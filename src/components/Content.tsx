import { MovieCard } from './MovieCard';

interface ContentProps {
  movies: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: {
      Source: string;
      Value: string;
    }[];
    Runtime: string;
  }[];
  selectedGenre:{
    title: string;
  }
}

export function Content(props:ContentProps ) {
  const { selectedGenre, movies } = props;
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
