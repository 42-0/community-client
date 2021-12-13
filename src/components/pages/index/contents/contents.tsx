import { css } from '@emotion/react';

import React, { useEffect, useRef } from 'react';
import { Content } from '../../../../stores/home/home.model';
import {
  card, cardsItem, container, img, imgWrapper, wrapper,
} from '../../../../styles/emotion/card.style';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

interface Props {
  posts: Content[] | undefined;
  page: number;
  setPage: (value: number) => void;
  setLastScrollY: (value: number) => void;
}

const Contents = ({
  posts,
  page,
  setPage,
  setLastScrollY,
}: Props) => {
  const ref = useRef(null);

  const isBottomVisible = useIntersectionObserver(
    ref,
    {
      threshold: 0, // trigger event as soon as the element is in the viewport.
    },
    false, // don't remove the observer after intersected.
  );

  useEffect(() => {
    // console.log('끝 :::', isBottomVisible);
    // load next page when bottom is visible

    if (window.scrollY < 2000 && page > 5) {
      return;
    }

    setLastScrollY(window.scrollY);
    isBottomVisible && setPage(page + 1);
  }, [isBottomVisible]);

  return (
    <>
      <div css={container}>
        <div css={wrapper}>
          {posts?.map((content: Content) => (
            <div
              key={content?.id}
              css={[cardsItem, css``]}
            >
              <div css={[card, css``]}>
                <a
                  href="http://localhost:9909"
                  css={imgWrapper}
                >
                  {/* <Image src={value?.contentURL} /> */}
                  <img
                    src={content?.files[0]?.filePath}
                    // src="https://picsum.photos/500/300/?image=11"
                    alt={content?.title}
                    css={img}
                  />
                </a>
                <div css={[css`
                  border-top: 1px solid rgb(226, 226, 226);
                `]}
                >
                  <h4 css={[css`
                    padding: 0.5rem;
                    white-space: initial;
                  `]}
                  >
                    {content?.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
          <div ref={ref} />
        </div>
      </div>
    </>
  );
};

export default Contents;
