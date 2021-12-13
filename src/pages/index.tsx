import type { NextPage } from 'next';
import React, { lazy, Suspense, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Layout from '../components/layout';
import { currentCursorInternal } from '../stores/home/home.store';
import HomeIndex from '../components/pages/index';
// const Contents = dynamic(() => import('../components/pages/index/contents'), { suspense: true });
// const Contents = lazy(() => import('../components/pages/index/contents'));

const Home: NextPage = () => {
  // const [page, setPage] = useState<number>(1);
  const [page, setPage] = useRecoilState<number>(currentCursorInternal);
  // const page = useRecoilValue<number>(currentCursorInternal);
  // const setPage = useSetRecoilState<number>(currentCursorInternal);

  return (
    <Layout home>

      {/* <Suspense fallback={( */}
      {/*  <div css={loadingWrapper}> */}
      {/*    <div css={loadingStyle}> */}
      {/*      <PulseLoader loading /> */}
      {/*    </div> */}
      {/*  </div> */}
      {/*  )} */}
      {/* > */}
      <HomeIndex page={page} setPage={setPage} />
      {/* </Suspense> */}
      <br />
      <button
        type="button"
        onClick={() => {
          console.log('click!!');
          setPage((value) => value + 1);
        }}
        // onClick={() => setPage((prevState) => prevState + 1)}
      >
        page+1클릭!
      </button>
      <button
        type="button"
        onClick={() => console.log('page :::', page)}
      >
        테스트
      </button>
      <button
        type="button"
        onClick={() => {
          window.scrollTo({
            top: 2000,
            behavior: 'smooth',
          });

          console.log('window.scrollY  :::', window.scrollY);
        }}
      >
        테스트22
      </button>
      <div>
        page :
        {page}
      </div>
      <br />
      <br />
      <br />

    </Layout>
  );
};

export default Home;
