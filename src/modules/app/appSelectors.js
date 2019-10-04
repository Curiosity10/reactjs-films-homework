import { createSelector } from 'reselect';
import noAvailableImage from '../../assets/images/noAvailableImage.png';

export const genresSelector = state => state.app.genres;
export const filterSelector = state => state.app.filter;
export const errorMessageSelector = state => state.app.error;
export const currentPageSelector = state => state.app.currentPage;
export const pagesCountSelector = state => state.app.pagesCount;
export const isLoadingSelector = state => state.app.isLoading;
export const genreIdSelector = state => state.app.genreId;
export const searchQuerySelector = state => state.app.searchQuery;
export const videoSrcSelector = state => (state.app.videoKey && `https://www.youtube.com/embed/${state.app.videoKey}`);
export const hasMorePagesSelector = createSelector(
  currentPageSelector,
  pagesCountSelector,
  (currentPage, pagesCount) => pagesCount > currentPage,
);
export const moviesFromStateSelector = state => state.app.movies;
export const movieDetailsSelector = (state) => {
  const { movie } = state.app;

  function getNormalRuntime(time = 0) {
    const hours = Math.floor(time / 60);
    const minutes = time - 60 * hours;
    return `${hours}h ${minutes}m`;
  }

  return {
    title: movie.title,
    id: movie.id,
    genres: movie.genres,
    rating: movie.vote_average,
    runtime: getNormalRuntime(movie.runtime),
    overview: movie.overview,
    image: movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : noAvailableImage,
  };
};
export const moviesSelector = createSelector(
  moviesFromStateSelector,
  genresSelector,
  (movies, genres) => movies.map((movie) => {
    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id));

    return {
      id: movie.id,
      rating: movie.vote_average,
      title: movie.title,
      genres: movieGenres,
      overview: movie.overview,
      image: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : noAvailableImage,
    };
  }),
);
