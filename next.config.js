const withCSS = require('@zeit/next-css');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

module.exports = withMDX({
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
});

/*module.exports = withCSS{
    webpack: function (config) {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        });
        return config;
      }
}*/
