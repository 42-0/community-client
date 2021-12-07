import { css } from '@emotion/react';

export const card = css`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #cecece;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;

  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;
