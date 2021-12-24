import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import GlobalsStyle from '../styles/emotion/globals.style';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalsStyle />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
