import movie from '../assets/json/movie.json';
import genres from '../assets/json/genres.json';
import popular from '../assets/json/popular.json';

const urlBase = 'https://image.tmdb.org/t/p/original';
const urlMinImg = 'https://image.tmdb.org/t/p/w300';

function getNormalRuntime(time) {
  const hours = Math.floor(time / 60);
  const minutes = time - 60 * hours;
  return `${hours}h ${minutes}m`;
}

function getMovieGenres(genresIds) {
  const genresArr = [];
  genresIds.map(genre => genres.genres.map((item) => {
    if (item.id === genre) {
      return genresArr.push({ id: item.id, name: item.name });
    }
    return 0;
  }));
  return genresArr;
}

export function getMovieInfo() {
  return {
    title: movie.original_title,
    genres: movie.genres,
    rating: movie.vote_average,
    runtime: getNormalRuntime(movie.runtime),
    overview: movie.overview,
    image: `${urlBase}${movie.backdrop_path}`,
  };
}

export function getGenres() {
  return genres.genres;
}

export function getPopularMovies() {
  return popular.results.map(item => ({
    id: item.id,
    rating: item.vote_average,
    title: item.title,
    genres: getMovieGenres(item.genre_ids),
    overview: item.overview,
    image: `${urlMinImg}${item.poster_path}`,
  }));
}
