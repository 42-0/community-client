import { css } from '@emotion/react';
import {
  useGetRecoilValueInfo_UNSTABLE, useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable, useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import React, { useEffect, useRef } from 'react';
import { values } from 'lodash';
import { currentCursorInternal, postsSelector, postsState } from '../../../stores/home/home.store';
import { Content, Posts } from '../../../stores/home/home.model';
import {
  card, cardsItem, container, img, imgWrapper, wrapper,
} from '../../../styles/emotion/card.style';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface Props {
  page: number;
  setPage: (value: number) => void;
}

const Contents = ({
  page,
  setPage,
}: Props) => {
  // const [posts, setPosts] = useRecoilState(postsState);
  const posts = useRecoilValue(postsState);
  // const posts = useResetRecoilState(postsSelector);

  // const posts = useRecoilValue(postsState);
  // const posts = useRecoilValue(postsSelector);
  // const posts = useRecoilValue<Content[]>(postsSelector(page));
  // const posts = useRecoilValueLoadable<Content[]>(postsSelector(page));
  const ref = useRef(null);

  const isBottomVisible = useIntersectionObserver(
    ref,
    {
      threshold: 0, // trigger event as soon as the element is in the viewport.
    },
    false, // don't remove the observer after intersected.
  );

  useEffect(() => {
    console.log('끝 :::', isBottomVisible);
    // load next page when bottom is visible
    // isBottomVisible && setPage(page + 1);
  }, [isBottomVisible]);

  useEffect(() => {
    console.log('posts ::::', posts);
    // console.log('tempC ::::', tempC);
  }, [posts]);

  // switch (posts.state) {
  //   case 'hasValue':
  //     return (
  //       <>
  //         <div css={container}>
  //           <div css={wrapper}>
  //             {posts?.contents?.map((content: Content) => (
  //               <div
  //                 key={content?.id}
  //                 css={[cardsItem, css``]}
  //               >
  //                 <div css={[card, css``]}>
  //                   <a
  //                     href="http://localhost:9909"
  //                     css={imgWrapper}
  //                   >
  //                     {/* <Image src={value?.contentURL} /> */}
  //                     <img
  //                       src={content?.files[0]?.filePath}
  //                       // src="https://picsum.photos/500/300/?image=11"
  //                       alt={content?.title}
  //                       css={img}
  //                     />
  //                   </a>
  //
  //                   <div css={[css`
  //                     border-top: 1px solid rgb(226, 226, 226);
  //                   `]}
  //                   >
  //                     <h4 css={[css`
  //                       padding: 0.5rem;
  //                       white-space: initial;
  //                     `]}
  //                     >
  //                       {content?.title}
  //                     </h4>
  //                   </div>
  //
  //                 </div>
  //
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </>
  //     );
  //   case 'loading':
  //     return <div>Loading...</div>;
  //   case 'hasError':
  //     return <div>{posts.contents}</div>;
  // }

  return (
    <>
      <div css={container}>
        <div css={wrapper}>

          {/* {posts?.map((content: Content) => ( */}
          {/*  <div */}
          {/*    key={content?.id} */}
          {/*    css={[cardsItem, css``]} */}
          {/*  > */}
          {/*    <div css={[card, css``]}> */}
          {/*      <a */}
          {/*        href="http://localhost:9909" */}
          {/*        css={imgWrapper} */}
          {/*      > */}
          {/*        /!* <Image src={value?.contentURL} /> *!/ */}
          {/*        <img */}
          {/*          src={content?.files[0]?.filePath} */}
          {/*          // src="https://picsum.photos/500/300/?image=11" */}
          {/*          alt={content?.title} */}
          {/*          css={img} */}
          {/*        /> */}
          {/*      </a> */}

          {/*      <div css={[css` */}
          {/*        border-top: 1px solid rgb(226, 226, 226); */}
          {/*      `]} */}
          {/*      > */}
          {/*        <h4 css={[css` */}
          {/*          padding: 0.5rem; */}
          {/*          white-space: initial; */}
          {/*        `]} */}
          {/*        > */}
          {/*          {content?.title} */}
          {/*        </h4> */}
          {/*      </div> */}

          {/*    </div> */}

          {/*  </div> */}
          {/* ))} */}
        </div>
      </div>
    </>
  );
};

export default Contents;
