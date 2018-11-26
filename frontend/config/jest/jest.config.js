module.exports = {
  verbose: true,
  collectCoverageFrom: ['<rootDir>/**/*.{js,jsx}'],
  coverageDirectory: '../src/coverage',
  coveragePathIgnorePatterns: [
    'coverage',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  rootDir: '../../src',
  testMatch: ['<rootDir>/**/__tests__/**/*.js?(x)', '<rootDir>/**/?(*.)+(spec|test).js?(x)'],
  moduleNameMapper: {
    '\\.(css|sass)$': 'identity-obj-proxy',
  },
};
