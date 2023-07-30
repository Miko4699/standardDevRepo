module.exports = {
  verbose: true,
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  preset: ['@vue/cli-plugin-unit-jest', 'jest-puppeteer'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
