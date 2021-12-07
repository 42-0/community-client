import type { AppProps } from 'next/app';
import GlobalsStyle from '../styles/emotion/globals.style';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalsStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
