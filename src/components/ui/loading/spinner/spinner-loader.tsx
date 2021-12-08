import { css, keyframes, SerializedStyles } from '@emotion/react';
import { primaryColor } from '../../../../styles/color.style';

interface Props {
  loading : boolean;
  color? : string;
  size? : number;
  speedMultiplier? : number;
}

const SpinnerLoader = ({
  loading, color = primaryColor, size = 35, speedMultiplier = 1,
} : Props) => {
  const clip = keyframes`
    0% {transform: rotate(0deg) scale(1)}
    50% {transform: rotate(180deg) scale(0.8)}
    100% {transform: rotate(360deg) scale(1)}
  `;

  const style = (): SerializedStyles => {
    return css`
      background: transparent !important;
      width: ${`${size}px`};
      height: ${`${size}px`};
      border-radius: 100%;
      border: 2px solid;
      border-color: ${color};
      border-bottom-color: transparent;
      display: inline-block;
      animation: ${clip} ${0.75 / speedMultiplier}s 0s infinite linear;
      animation-fill-mode: both;
      z-index: 1 !important;
    `;
  };

  return loading ? <span css={style} /> : null;
};

export default SpinnerLoader;
