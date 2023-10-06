const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-controls',
    'storybook-axios/register',
    '@storybook/addon-story-state',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  features: {
    emotionAlias: false,
  },
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    const imageRule = config.module.rules.find((rule) => {
      if (typeof rule !== 'string' && rule.test instanceof RegExp) {
        return rule.test.test('.svg');
      }
    });
    if (typeof imageRule !== 'string') {
      imageRule.exclude = /\.svg$/;
    }
    config.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
    };
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    return config;
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true,
  },
};
