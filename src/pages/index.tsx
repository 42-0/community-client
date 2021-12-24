import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import Layout from '../components/layout';
import { currentCursorInternalState } from '../stores/home/home.store';
import Home from '../components/pages/home/home';
// const DetailContents = dynamic(() => import('../components/pages/home/contents'), { suspense: true });
// const DetailContents = lazy(() => import('../components/pages/home/contents'));

const HomePage: NextPage = () => {
  const [page, setPage] = useRecoilState<number>(currentCursorInternalState);

  return (
    <Layout home>
      <Home page={page} setPage={setPage} />
    </Layout>
  );
};

export default HomePage;
