import type { NextPage } from 'next';
import Image from 'next/image';
import { css } from '@emotion/react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import React, { Suspense, useEffect } from 'react';
import { postsSelector } from '../../../stores/home/home.store';
import { loadingStyle, loadingWrapper } from '../../../styles/emotion/loading.style';
import PulseLoader from '../../ui/loading/pulse/pulse-loader';
import { Content, Posts } from '../../../stores/home/home.model';
import { card, cardsItem } from '../../../styles/emotion/card.style';

interface Props {
  page: number;
}

const Contents = ({ page }: Props) => {
  const posts = useRecoilValue<Posts>(postsSelector(page));

  useEffect(() => {
    console.log('posts ::::', posts);
  }, [posts]);

  return (
    <>
      <div css={[css`
        display: flex;
        flex-direction: column;
        align-items: center;
        //flex-wrap: wrap; 
        //justify-content: center;
      `]}
      >
        <div css={[css`
          max-width: 1380px;
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          margin: 0;
          padding: 0;
        `]}
        >
          {posts?.content?.map((content: Content) => (
            <div
              key={content?.id}
              css={[cardsItem, css`
              `]}
            >
              <div css={[card, css`
              `]}
              >
                <a
                  href="http://localhost:9909"
                  css={[css`
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-bottom: 56.26%;
                    overflow: hidden;
                  `]}
                >
                  {/* <Image src={value?.contentURL} /> */}
                  <img
                    src={content?.files[0]?.filePath}
                    // src="https://picsum.photos/500/300/?image=11"
                    alt={content?.title}
                    css={[css`
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                    `]}
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
        </div>
      </div>
    </>
  );
};

export default Contents;
