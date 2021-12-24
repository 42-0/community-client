import type { NextPage } from 'next';
import { useRecoilValueLoadable } from 'recoil';
import { useRouter } from 'next/router';
import Layout from '../components/layout/layout';
import { postSelector } from '../stores/detail/detail.store';
import Detail from '../components/pages/detail/detail';
import { IDetail } from '../stores/detail/detail.model';

const DetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = useRecoilValueLoadable<IDetail | undefined>(postSelector(Number(id)));

  return (
    <Layout pageName={post?.contents?.title}>
      <Detail post={post} />
    </Layout>
  );
};

export default DetailPage;
