import { NextPage } from 'next';
import { css } from '@emotion/react';
import Layout from '../../components/layout/index';
import PulseLoader from '../../components/ui/loading/pulse/pulse-loader';
import { loadingStyle, loadingWrapper } from '../../styles/emotion/loading.style';
import SpinnerLoader from '../../components/ui/loading/spinner/spinner-loader';

const Post: NextPage = () => {
  // http://52.78.54.195:3000/contents

  return (
    <Layout pageName="post 리스트">
      <div css={[css` background-color: aqua; height: 100%;`]}>
        post Page !!
      </div>
    </Layout>
  );
};

export default Post;
