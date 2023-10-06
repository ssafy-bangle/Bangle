import Layout from '@src/components/templates/layout';
import GlobalStyle from '@src/styles/GlobalStyle';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>방글</title>
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
