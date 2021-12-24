import type { NextPage } from 'next';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/layout/layout';
import { postSelector } from '../stores/detail/detail.store';
import Detail from '../components/pages/detail/detail';
import { IDetail } from '../stores/detail/detail.model';

const DetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = useRecoilValueLoadable<IDetail | undefined>(postSelector(Number(id)));

  // http://52.78.54.195:3000/contents/2741

  useEffect(() => {
    if (!id) {
      return;
    }
    console.log('id ::::', id);
  }, [id]);

  return (
    <Layout pageName={post?.contents?.title}>
      <Detail post={post} />
    </Layout>
  );
};

export default DetailPage;
