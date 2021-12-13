import {
  useRecoilValueLoadable,
} from 'recoil';
import React, { useEffect, useState } from 'react';
import {
  postsSelector,
} from '../../../stores/home/home.store';
import { Content } from '../../../stores/home/home.model';
import { loadingStyle, loadingWrapper } from '../../../styles/emotion/loading.style';
import PulseLoader from '../../ui/loading/pulse/pulse-loader';
import Contents from './contents/contents';

interface Props {
  page: number;
  setPage: (value: number) => void;
}

const HomeIndex = ({
  page,
  setPage,
}: Props) => {
  const posts = useRecoilValueLoadable<Content[] | undefined>(postsSelector(page));
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    // console.log('posts ::::', posts);
    // console.log('window.scrollY  :::', window.scrollY);
    // behavior: 'smooth'
    window.scrollTo({ top: lastScrollY });
  }, [posts]);

  switch (posts.state) {
    case 'hasValue':
      return (
        <>
          <Contents posts={posts.contents} page={page} setPage={setPage} setLastScrollY={setLastScrollY} />
        </>
      );
    case 'loading':
      return (
        <>
          <div css={loadingWrapper}>
            <div css={loadingStyle}>
              <PulseLoader loading />
            </div>
          </div>
          {/* <Contents posts={posts.contents} /> */}
        </>
      );
    case 'hasError':
      return <div>Error</div>;
      // return <div>{posts.contents}</div>;
  }
};

export default HomeIndex;
