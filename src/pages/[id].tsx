import type { NextPage } from 'next';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/layout';
import { postSelector } from '../stores/detail/detail.store';
import DetailIndex from '../components/pages/detail';
import { Detail } from '../stores/detail/detail.model';

const DetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = useRecoilValueLoadable<Detail | undefined>(postSelector(Number(id)));

  // http://52.78.54.195:3000/contents/2741

  useEffect(() => {
    if (!id) {
      return;
    }
    console.log('id ::::', id);
  }, [id]);

  return (
    <Layout pageName={post?.contents?.title}>

      <DetailIndex post={post} />

      <br />

      {/* <button */}
      {/*  type="button" */}
      {/*  onClick={() => console.log('page :::', page)} */}
      {/* > */}
      {/*  테스트 */}
      {/* </button> */}

    </Layout>
  );
};

export default DetailPage;
