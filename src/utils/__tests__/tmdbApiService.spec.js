import * as service from '../tbdbApiService';
import { genres } from '../../assets/json/genres.json';
import noAvailableImage from '../../assets/images/noAvailableImage.png';

describe('Service functions work correctly', () => {
  const movies = [
    {
      id: 123,
      vote_average: 5,
      title: 'title',
      genre_ids: [12, 28],
      genres: [{ id: 12, name: 'Adventure' }, { id: 28, name: 'Action' }],
      overview: 'movie',
      poster_path: '/12345',
      runtime: 120,
      backdrop_path: '/12345',
    },
    {
      id: 12345,
      vote_average: 6,
      title: 'title1',
      genre_ids: [16, 35],
      overview: 'movie overview',
      poster_path: '/123',
    },
  ];
  const movieWithoutImage = [
    {
      id: 123,
      vote_average: 5,
      title: 'title',
      genre_ids: [12, 28],
      genres: [{ id: 12, name: 'Adventure' }, { id: 28, name: 'Action' }],
      overview: 'movie',
      runtime: 120,
    },
  ];
  it('Get movies work correctly', () => {
    expect(service.getMovies(movies, genres)).toEqual([
      {
        genres: [{ id: 12, name: 'Adventure' }, { id: 28, name: 'Action' }],
        id: 123,
        image: 'https://image.tmdb.org/t/p/w300/12345',
        overview: 'movie',
        rating: 5,
        title: 'title',
      },
      {
        genres: [{ id: 16, name: 'Animation' }, { id: 35, name: 'Comedy' }],
        id: 12345,
        image: 'https://image.tmdb.org/t/p/w300/123',
        overview: 'movie overview',
        rating: 6,
        title: 'title1',
      },
    ]);
  });
  it('Get movie work correctly', () => {
    expect(service.getMovieInfo(movies[0])).toEqual({
      title: 'title',
      genres: [{ id: 12, name: 'Adventure' }, { id: 28, name: 'Action' }],
      rating: 5,
      runtime: '2h 0m',
      overview: 'movie',
      image: 'https://image.tmdb.org/t/p/original/12345',
    });
  });
  it('Get movies without params not break', () => {
    expect(service.getMovies()).toEqual([]);
  });
  it('Get genres without params not break', () => {
    expect(service.getMovieGenres()).toEqual([]);
  });
  it('Get movies without image work correctly', () => {
    expect(service.getMovies(movieWithoutImage, genres)).toEqual([
      {
        genres: [{ id: 12, name: 'Adventure' }, { id: 28, name: 'Action' }],
        id: 123,
        image: noAvailableImage,
        overview: 'movie',
        rating: 5,
        title: 'title',
      },
    ]);
  });
  it('Get movie without image work correctly', () => {
    expect(service.getMovieInfo(movieWithoutImage[0])).toEqual({
      title: 'title',
      genres: [{ id: 12, name: 'Adventure' }, { id: 28, name: 'Action' }],
      rating: 5,
      runtime: '2h 0m',
      overview: 'movie',
      image: noAvailableImage,
    });
  });
});
