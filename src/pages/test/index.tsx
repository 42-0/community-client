import { NextPage } from 'next';
import { css, jsx } from '@emotion/react';

const Test: NextPage = () => {
  const blue = css`
    color: #00afef;
  `;

  const fontLarge = css`
    font-size: x-large;
  `;

  return (
    <div css={[blue, fontLarge, css` background-color: aqua;`]}>
      Test Page !!
    </div>
  );
};

export default Test;
