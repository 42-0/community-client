import React, { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import GlobalsStyle from '../styles/emotion/globals.style';
import { loadingStyle, loadingWrapper } from '../styles/emotion/loading.style';
import PulseLoader from '../components/ui/loading/pulse/pulse-loader';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalsStyle />
      <RecoilRoot>
        {/* TODO : ErrorBoundary 컴포넌트 작업 */}
        {/* <ErrorBoundary> */}
        {/* <Suspense fallback={( */}
        {/*  <div css={loadingWrapper}> */}
        {/*    <div css={loadingStyle}> */}
        {/*      <PulseLoader loading /> */}
        {/*    </div> */}
        {/*  </div> */}
        {/* )} */}
        {/* > */}
        <Component {...pageProps} />
        {/* </Suspense> */}
      </RecoilRoot>
    </>
  );
};

export default MyApp;
