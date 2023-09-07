import Nav from '@src/components/molecules/nav';
import GlobalStyle from '@src/styles/GlobalStyle';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default App;
