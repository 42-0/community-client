import { css } from '@emotion/react';

import { Detail } from '../../../../stores/detail/detail.model';

interface Props {
  post: Detail | undefined;
}

const DetailContents = ({
  post,
}: Props) => {
  return (
    <>
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
