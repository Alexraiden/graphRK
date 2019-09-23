const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
    addBabelPlugin(
        ["babel-plugin-import-graphql", {nodePath: process.env.NODE_PATH}]
    )
);