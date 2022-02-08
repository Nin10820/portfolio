module: {
  loaders: [
    {
      test: /\.vue$/,
      loader: "vue",
    },
    {
      test: /\.s[a|c]ss$/,
      loader: "style!css!sass",
    },
  ];
  vue: {
    loaders: {
      scss: "style!css!sass";
    }
  }

  rules: [{
    test: /\.scss$/,
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          minimize: true,
          sourceMap: true
        }
      },
      {
        loader: "sass-loader"
      }
    ]
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: ["babel-loader", "eslint-loader"]
  },
  {
    test: /\.(jpe?g|png|gif)$/i,
    loader: "file-loader"
  },
  {
    test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
    loader: "file-loader"
  }
]
}
