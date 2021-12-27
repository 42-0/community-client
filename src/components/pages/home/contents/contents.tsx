import { Content } from '../../../../stores/home/home.model';
import ContentsCard from '../contents-card/contents-card';
import { container, wrapper } from './contents.style';

export interface ContentsProps {
  posts: Content[] | undefined;
  page: number;
  setPage: (value: number) => void;
  setLastScrollY: (value: number) => void;
}

const Contents = ({
  posts,
  page,
  setPage,
  setLastScrollY,
}: ContentsProps) => {
  return (
    <div css={container}>
      <div css={wrapper}>
        <ContentsCard posts={posts} page={page} setPage={setPage} setLastScrollY={setLastScrollY} />
      </div>
    </div>
  );
};

// Props 바뀌지 않으면 리렌더링을 하지 않음
export default Contents;
