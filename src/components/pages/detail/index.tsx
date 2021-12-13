import {
  Loadable,
} from 'recoil';
import { loadingStyle, loadingWrapper } from '../../../styles/emotion/loading.style';
import PulseLoader from '../../ui/loading/pulse/pulse-loader';
import DetailContents from './detail-contents/detail-contents';
import { Detail } from '../../../stores/detail/detail.model';

export interface DetailProps {
  post: Loadable<Detail | undefined>;
}

const DetailIndex = ({
  post,
}: DetailProps) => {
  switch (post.state) {
    case 'hasValue':
      return (
        <DetailContents post={post.contents} />
      );
    case 'loading':
      return (
        <>
          <div css={loadingWrapper}>
            <div css={loadingStyle}>
              <PulseLoader loading />
            </div>
          </div>
        </>
      );
    case 'hasError':
      return <div>Error</div>;
  }
};

export default DetailIndex;
