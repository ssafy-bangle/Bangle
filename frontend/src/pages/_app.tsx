import Layout from '@src/components/templates/layout';
import GlobalStyle from '@src/styles/GlobalStyle';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
