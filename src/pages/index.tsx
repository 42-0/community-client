import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import Layout from '../components/layout';
import { currentCursorInternalState } from '../stores/home/home.store';
import HomeIndex from '../components/pages/home';
// const DetailContents = dynamic(() => import('../components/pages/home/contents'), { suspense: true });
// const DetailContents = lazy(() => import('../components/pages/home/contents'));

const HomePage: NextPage = () => {
  const [page, setPage] = useRecoilState<number>(currentCursorInternalState);

  return (
    <Layout home>

      <HomeIndex page={page} setPage={setPage} />

      <br />

      {/* <button */}
      {/*  type="button" */}
      {/*  onClick={() => console.log('page :::', page)} */}
      {/* > */}
      {/*  테스트 */}
      {/* </button> */}

    </Layout>
  );
};

export default HomePage;
