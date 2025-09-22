// const nextJest = require("next/jest");

// const createJestConfig = nextJest({
//   dir: "./",
// });

// const customJestConfig = {
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/$1",
//   },
// };

// module.exports = createJestConfig(customJestConfig);

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // 👈 point @/ to src/
  },
};

module.exports = createJestConfig(customJestConfig);
