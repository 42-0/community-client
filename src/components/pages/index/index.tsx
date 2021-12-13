import { css } from '@emotion/react';
import {
  selectorFamily,
  useGetRecoilValueInfo_UNSTABLE, useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable, useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import React, { useEffect, useRef, useState } from 'react';
import { values } from 'lodash';
import {
  currentCursorInternal,
  fetchPosts, postsSelector,
  postsState,
} from '../../../stores/home/home.store';
import { Content, Posts } from '../../../stores/home/home.model';
import {
  card, cardsItem, container, img, imgWrapper, wrapper,
} from '../../../styles/emotion/card.style';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
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
    console.log('posts ::::', posts);
    console.log('window.scrollY  :::', window.scrollY);
    window.scrollTo({ top: lastScrollY });
    // behavior: 'smooth'
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
      return <div>{posts.contents}</div>;
  }
};

export default HomeIndex;
