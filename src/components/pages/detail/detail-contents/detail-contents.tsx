import { css } from '@emotion/react';
import { IDetail } from '../../../../stores/detail/detail.model';

interface Props {
  post: IDetail | undefined;
}

const DetailContents = ({
  post,
}: Props) => {
  return (
    <>
      <a href={post?.contentURL} target="_blank" rel="noreferrer">원글</a>
      <div>
        title :
        {post?.title}
      </div>
      <div>
        content :
        {post?.content}
      </div>
      <div>
        files :
        {post?.files?.map((value) => (
          <div key={value?.id}>
            <img src={value?.filePath} alt="" css={[css`width: 500px; height: 300px;`]} />
          </div>
        ))}
      </div>

    </>
  );
};

export default DetailContents;
