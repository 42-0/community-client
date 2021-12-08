import { NextPage } from 'next';
import { css, jsx } from '@emotion/react';
import { loadingStyle, loadingWrapper } from '../../styles/emotion/loading.style';
import SpinnerLoader from '../../components/ui/loading/spinner/spinner-loader';
import PulseLoader from '../../components/ui/loading/pulse/pulse-loader';

const Test: NextPage = () => {
  const blue = css`
    color: #00afef;
  `;

  const fontLarge = css`
    font-size: x-large;
  `;

  return (
    <div css={[blue, fontLarge, css` background-color: aqua;`]}>
      Test Page !!

      <div css={loadingWrapper}>
        <div css={loadingStyle}>
          <SpinnerLoader loading color="#24ebff" />
        </div>
      </div>
      <div css={loadingWrapper}>
        <div css={loadingStyle}>
          <PulseLoader color="#1ac7ff" loading size={15} margin={3} speedMultiplier={1} />
        </div>
      </div>

    </div>
  );
};

export default Test;
