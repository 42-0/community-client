import {
  useRecoilState,
} from 'recoil';
import {
  lastScrollYState,
} from '../../../stores/home/home.store';
import { loadingStyle, loadingWrapper } from '../../../styles/emotion/loading.style';
import PulseLoader from '../../ui/loading/pulse/pulse-loader';
import Contents from './contents/contents';
import useFetchPosts from './use-fetch-posts';
// const Contents = lazy(() => import('./contents/content'));

interface Props {
  page: number;
  setPage: (value: number) => void;
}

const HomeIndex = ({
  page,
  setPage,
}: Props) => {
  const { isLoading, isError, posts } = useFetchPosts({ page });
  const [lastScrollY, setLastScrollY] = useRecoilState<number>(lastScrollYState);

  /**
   * 로딩후 스크롤 위치 찾아가기위함
  * */
  // useEffect(() => {
  //   // console.log('posts ::::', posts);
  //   // console.log('window.scrollY  :::', window.scrollY);
  //   // behavior: 'smooth'
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

export default HomeIndex;
