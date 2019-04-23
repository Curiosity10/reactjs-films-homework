import Movie from '../assets/json/movie.json';
import Genres from '../assets/json/genres.json';
import Popular from '../assets/json/popular.json';

const urlBase = 'https://image.tmdb.org/t/p/original';
const urlMinImg = 'https://image.tmdb.org/t/p/w300';

function getNormalRuntime(time) {
  const hours = Math.floor(time / 60);
  const minutes = time - 60 * hours;
  return `${hours}h ${minutes}m`;
}

function getMovieGenres(genresIds) {
  const genresArr = [];
  genresIds.map(genre => Genres.genres.map((item) => {
    if (item.id === genre) {
      return genresArr.push({ id: item.id, name: item.name });
    }
    return 0;
  }));
  return genresArr;
}

export function getMovieInfo() {
  return {
    title: Movie.original_title,
    genres: Movie.genres,
    rating: Movie.vote_average,
    runtime: getNormalRuntime(Movie.runtime),
    overview: Movie.overview,
    image: `${urlBase}${Movie.backdrop_path}`,
  };
}

export function getGenres() {
  return Genres.genres;
}

export function getPopularMovies() {
  return Popular.results.map(movie => ({
    id: movie.id,
    rating: movie.vote_average,
    title: movie.title,
    genres: getMovieGenres(movie.genre_ids),
    overview: movie.overview,
    image: `${urlMinImg}${movie.poster_path}`,
  }));
}
