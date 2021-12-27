import {
  useRecoilState,
} from 'recoil';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import {
  lastScrollYState,
} from '../../../stores/home/home.store';
import { loadingStyle, loadingWrapper } from '../../../styles/emotion/loading.style';
import PulseLoader from '../../ui/loading/pulse/pulse-loader';
import Contents from './contents/contents';
import useFetchPosts from './hooks/use-fetch-posts';
import { skeleton } from '../../../styles/emotion/skeleton.style';

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

  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };
    (window.adsbygoogle = window.adsbygoogle || []).push({});

    window.googletag.cmd.push(() => {
      window.googletag.defineSlot('/5932629/Native_sample_2', ['fluid'], 'div-gpt-ad-1640583099428-0').addService(window.googletag.pubads());
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
    });

    window.googletag.cmd.push(() => { window.googletag.display('div-gpt-ad-1640583099428-0'); });
  }, []);

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
      <div
        id="div-gpt-ad-1640583099428-0"
        css={css`width: 500px; height: 500px;`}
      >
        {/* <script> */}
        {/*  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1640583099428-0'); }); */}
        {/* </script> */}
      </div>
      {/* <div css={skeleton} /> */}

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
