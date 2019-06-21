import noAvailableImage from '../assets/images/noAvailableImage.png';

const urlBase = 'https://image.tmdb.org/t/p/original';
const urlMinImg = 'https://image.tmdb.org/t/p/w300';

function getNormalRuntime(time) {
  const hours = Math.floor(time / 60);
  const minutes = time - 60 * hours;
  return `${hours}h ${minutes}m`;
}

export function getMovieGenres(genresIds = [], genres = []) {
  const genresArr = [];
  genresIds.map(genre => genres.map((movie) => {
    if (movie.id === genre) {
      return genresArr.push({ id: movie.id, name: movie.name });
    }
    return 0;
  }));
  return genresArr;
}

export function getMovieInfo(movie) {
  return {
    title: movie.title,
    genres: movie.genres,
    rating: movie.vote_average,
    runtime: getNormalRuntime(movie.runtime),
    overview: movie.overview,
    image: movie.backdrop_path ? `${urlBase}${movie.backdrop_path}` : noAvailableImage,
  };
}

export function getMovies(movies = [], allGenres = []) {
  return movies.map(movie => ({
    id: movie.id,
    rating: movie.vote_average,
    title: movie.title,
    genres: getMovieGenres(movie.genre_ids, allGenres),
    overview: movie.overview,
    image: movie.poster_path ? `${urlMinImg}${movie.poster_path}` : noAvailableImage,
  }));
}
