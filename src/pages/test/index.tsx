import { NextPage } from 'next';
import { css } from '@emotion/react';

const Test: NextPage = () => {
  const blue = css`
    color: #00afef;
  `;

  return (
    <div css={blue}>
      Test Page !!
    </div>
  );
};

export default Test;
