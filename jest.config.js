module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": `babel-jest`,
  },
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/file-mock.js",
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  testEnvironment: "jsdom",
};
