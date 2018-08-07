// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      statements: 42.86,
      branches: 0,
      lines: 42.11,
      functions: 3.7,
    }
  },
  globals: {
    'ts-jest': {
      tsConfigFile: '../tsconfig.test.json'
    }
  },
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  rootDir: 'src', // acts as if file was inside /src folder
  testEnvironment: "jsdom",
  testURL: 'http://localhost',
  testMatch: [
    '**/*.spec.ts'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true,
};
