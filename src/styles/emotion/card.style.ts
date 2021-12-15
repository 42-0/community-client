import { css } from '@emotion/react';
import { primaryColor } from '../color.style';

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  //flex-wrap: wrap; 
  //justify-content: center;
`;
export const wrapper = css`
  max-width: 1380px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const cardsItem = css`
  width: 100%;
  display: flex;
  //padding: 0.2rem;

  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 72rem) {
    width: 33.3333%;
  }
  @media (min-width: 112rem) {
    width: 25%;
  }
  //@media (min-width: 112rem) {
  //  width: 20%;
  //}
  //@media (min-width: 148rem) {
  //  width: 16.6666%;
  //}
`;

export const card = css`
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0.5rem;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  //transition: color 0.15s ease, border-color 0.15s ease;

  width: 100% !important;
  //max-width: 500px;
  ////min-width: 150px;
  ////width: 500px;
  //
  //
  //height: 300px;
  //
  //margin: 0.5rem;
  ////padding: 1.2rem;
  //text-align: center;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;

  &:hover {
    //color: #0070f3;
    //border-color: #0070f3;
    color: ${primaryColor};
    border-color: ${primaryColor};
  }

  //@media screen and (max-width: 768px) {
  //  /* 모바일에 사용될 스트일 시트를 여기에 작성합니다. */
  //  max-width: none;
  //}

`;

export const imgWrapper = css`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.26%;
  overflow: hidden;
`;

export const img = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
