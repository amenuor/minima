module.exports = {
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
  collectCoverageFrom: [
    "app/**/*.js",
    "!app/index.js",
    "!**/*.test.js",
    "!**/Loadable.js"
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98
    }
  },
  moduleDirectories: [
    "node_modules",
    "app"
  ],
  moduleNameMapper: {
    ".*\\.(css|less|styl|scss|sass)$": "<rootDir>/utilities/cssModule.js",
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/utilities/image.js"
  },
  setupTestFrameworkScriptFile: "<rootDir>/utilities/testBundler.js",
  setupFiles: [
    "<rootDir>/utilities/enzymeSetup.js"
  ],
  testRegex: "tests/.*\\.test\\.js$",
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ]
};