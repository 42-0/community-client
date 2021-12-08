import type { NextPage } from 'next';
import Image from 'next/image';
import { css } from '@emotion/react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import Layout from '../components/layout';
import { postsSelector } from '../stores/home/home.store';

const Home: NextPage = () => {
  const posts = useRecoilValueLoadable(postsSelector);
  // const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));
  // eslint-disable-next-line default-case
  switch (posts.state) {
    case 'hasValue':
      return <div>{posts.contents?.data}</div>;
      // return <div>hasValue</div>;
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw posts.contents;
  }

  return (
    <Layout home>

      ddd

    </Layout>
  );
};

export default Home;
