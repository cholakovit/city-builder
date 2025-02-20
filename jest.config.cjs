module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "ts-jest",
      { tsconfig: "tsconfig.jest.json" },
    ],
  },
  moduleNameMapper: {
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "^@/components/(.*)$": "<rootDir>/app/components/$1",
    "^@/helper/(.*)$": "<rootDir>/app/helper/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // ✅ Mock CSS files
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};








// /* eslint-disable @typescript-eslint/no-require-imports */
// /** @type {import('jest').Config} */
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const path = require("path");

// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   transform: {
//     "^.+\\.(ts|tsx|js|jsx)$": [
//       "ts-jest",
//       { tsconfig: "tsconfig.jest.json" }, // ✅ Ensure correct TypeScript config
//     ],
//   },
//   moduleNameMapper: {
//     "^@/app/(.*)$": "<rootDir>/app/$1", // ✅ Fix alias resolution
//     "^@/components/(.*)$": "<rootDir>/app/components/$1",
//     "^@/helper/(.*)$": "<rootDir>/app/helper/$1",
//   },
//   setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
//   testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
// };
