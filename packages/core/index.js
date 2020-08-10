require("source-map-support/register");
const pkg = require("./package.json");

module.exports = {
  build: require("./lib/build"),
  create: require("./lib/commands/create/helpers"),
  console: require("./lib/repl"),
  // TODO: update this to non-legacy the next breaking change
  contracts: require("@truffle/workflow-compile/legacy"),
  package: require("./lib/package"),
  test: require("./lib/test"),
  version: pkg.version,
  ganache: require("ganache-core/public-exports")
};
