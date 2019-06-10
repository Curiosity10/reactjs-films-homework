module.exports = {
  verbose: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,jsx}',
    '!<rootDir>/**/index.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: [
    'coverage',
    '<rootDir>/App.jsx',
    '<rootDir>/index.jsx',
    '<rootDir>/components/Movies/Movies.jsx',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  rootDir: '../../src',
  testMatch: ['<rootDir>/**/__tests__/**/*.js?(x)', '<rootDir>/**/?(*.)+(spec|test).js?(x)'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
  },
};
