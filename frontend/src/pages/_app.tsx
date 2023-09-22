import Layout from '@src/components/templates/layout';
import GlobalStyle from '@src/styles/GlobalStyle';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#2cc295',
    token: {
      colorPrimary: '#2cc295',
      colorPrimaryHover: '#2cc295',
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <ConfigProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </RecoilRoot>
  );
}

export default App;
