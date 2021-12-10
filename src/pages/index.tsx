import type { NextPage } from 'next';
import { css } from '@emotion/react';
import React, { lazy, Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/layout';
import { loadingStyle, loadingWrapper } from '../styles/emotion/loading.style';
import PulseLoader from '../components/ui/loading/pulse/pulse-loader';

import Contents from '../components/pages/index/contents';
// const Contents = dynamic(() => import('../components/pages/index/contents'), { suspense: true });
// const Contents = lazy(() => import('../components/pages/index/contents'));

const Home: NextPage = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <Layout home>

      {/* <div css={[css` */}
      {/*  //text-align: center; */}
      {/*  display: flex; */}
      {/*  flex-direction: column; */}
      {/*  align-items: center; */}
      {/* `]} */}
      {/* > */}

      <Suspense fallback={(
        <div css={loadingWrapper}>
          <div css={loadingStyle}>
            <PulseLoader loading />
          </div>
        </div>
        )}
      >
        <Contents page={page} />
      </Suspense>
      <br />
      <button type="button" onClick={() => setPage((prevState) => prevState + 1)}>page+1</button>
      <br />
      <br />
      <br />
      {/* </div> */}

    </Layout>
  );
};

export default Home;
