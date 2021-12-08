import { css } from '@emotion/react';

export const loadingWrapper = css`
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const loadingStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: -webkit-translate(-50%, -50%);
  transform: -moz-translate(-50%, -50%);
  transform: -ms-translate(-50%, -50%);
`;
