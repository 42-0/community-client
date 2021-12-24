import { NextPage } from 'next';
import { css } from '@emotion/react';
import Layout from '../../components/layout/layout';

const Post: NextPage = () => {
  const blue = css`
    color: #00afef;
  `;

  const fontLarge = css`
    font-size: x-large;
  `;

  return (
    <Layout pageName="post detail">
      <div css={[blue, fontLarge, css` background-color: aqua;`]}>
        post detail Page !!
      </div>
    </Layout>
  );
};

export default Post;
