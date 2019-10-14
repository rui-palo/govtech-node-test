
require("@babel/register")({
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
});
// require('babel-polyfill');
console.log('== @index.js: Importing server.js ==');
require('./src/server.js');