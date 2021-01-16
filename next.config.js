const withCSS = require('@zeit/next-css');

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

/*module.exports = withCSS{
    webpack: function (config) {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        });
        return config;
      }
}*/
