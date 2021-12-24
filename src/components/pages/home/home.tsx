import {
  useRecoilState,
} from 'recoil';
import {
  lastScrollYState,
} from '../../../stores/home/home.store';
import { loadingStyle, loadingWrapper } from '../../../styles/emotion/loading.style';
import PulseLoader from '../../ui/loading/pulse/pulse-loader';
import Contents from './contents/contents';
import useFetchPosts from './hooks/use-fetch-posts';

interface Props {
  page: number;
  setPage: (value: number) => void;
}

const Home = ({
  page,
  setPage,
}: Props) => {
  const { isLoading, isError, posts } = useFetchPosts({ page });
  const [lastScrollY, setLastScrollY] = useRecoilState<number>(lastScrollYState);

  /**
   *  스크롤 위치 찾아가기위함
  * */
  // useEffect(() => {
  //   behavior: 'smooth'
  //   window.scrollTo({ top: lastScrollY, behavior: 'auto' });
  // }, [posts]);

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Contents posts={posts} page={page} setPage={setPage} setLastScrollY={setLastScrollY} />

      {isLoading && (
        <div css={loadingWrapper}>
          <div css={loadingStyle}>
            <PulseLoader loading />
          </div>
        </div>
      )}

    </>
  );
};

export default Home;
