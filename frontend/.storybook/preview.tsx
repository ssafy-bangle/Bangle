import GlobalStyle from '../src/styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { Preview } from '@storybook/react';

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Story />
      </RecoilRoot>
    </>
  ),
];
