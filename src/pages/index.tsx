import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import Layout from '../components/layout';
import { currentCursorInternal } from '../stores/home/home.store';
import HomeIndex from '../components/pages/index';
// const Contents = dynamic(() => import('../components/pages/index/contents'), { suspense: true });
// const Contents = lazy(() => import('../components/pages/index/contents'));

const Home: NextPage = () => {
  const [page, setPage] = useRecoilState<number>(currentCursorInternal);

  return (
    <Layout home>

      <HomeIndex page={page} setPage={setPage} />

      <br />
      {/* <button */}
      {/*  type="button" */}
      {/*  onClick={() => { */}
      {/*    console.log('click!!'); */}
      {/*    setPage((value) => value + 1); */}
      {/*  }} */}
      {/* > */}
      {/*  page+1클릭! */}
      {/* </button> */}
      {/* <button */}
      {/*  type="button" */}
      {/*  onClick={() => console.log('page :::', page)} */}
      {/* > */}
      {/*  테스트 */}
      {/* </button> */}
      {/* <button */}
      {/*  type="button" */}
      {/*  onClick={() => { */}
      {/*    window.scrollTo({ */}
      {/*      top: 2000, */}
      {/*      behavior: 'smooth', */}
      {/*    }); */}

      {/*    console.log('window.scrollY  :::', window.scrollY); */}
      {/*  }} */}
      {/* > */}
      {/*  테스트22 */}
      {/* </button> */}

    </Layout>
  );
};

export default Home;
