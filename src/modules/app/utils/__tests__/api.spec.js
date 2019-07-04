import * as api from '../api';

global.fetch = require('jest-fetch-mock');

describe('API calls work correctly', () => {
  it('Get genres work correctly', () => api.getGenres()
    .then((data) => {
      expect(data).toBeDefined();
    }));

  it('Get top movies work correctly', () => api.getMoviesByFilter({ page: 1 }, 'top_rated')
    .then((data) => {
      expect(data).toBeDefined();
    }));

  it('Get movies details work correctly', () => api.getMovieDetails({ movieId: 12345 })
    .then((data) => {
      expect(data).toBeDefined();
    }));

  it('Get movie video work correctly', () => api.getMovieVideo(12345)
    .then((data) => {
      expect(data).toBeDefined();
    }));

  it('Get movies by genre work correctly', () => api.getMoviesByGenre({ page: 1, genre: 12 })
    .then((data) => {
      expect(data).toBeDefined();
    }));

  it('Get search movies work correctly', () => api.searchMovies({ page: 1, query: '123' })
    .then((data) => {
      expect(data).toBeDefined();
    }));
});
