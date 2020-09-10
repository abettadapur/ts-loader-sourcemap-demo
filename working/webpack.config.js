const webpack = require("webpack");

module.exports = {
    target: 'node',
    mode: 'production',
    devtool:'source-map',
    entry:  "./src/index.ts",
    module: {
        rules: [
            { test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              inlineSourceMap: false,
              sourceMap: true,
              module: 'es6', // override `tsconfig.json` so that TypeScript emits native JavaScript modules.
            },
          },
        },
      ],
      exclude: /(node_modules|__tests__|__mocks__)/,
    }
        ]
    },
      "resolve": {
    "extensions": [
      ".tsx",
      ".ts",
      ".js",
      ".jsx",
      ".json"
    ],
      },
}