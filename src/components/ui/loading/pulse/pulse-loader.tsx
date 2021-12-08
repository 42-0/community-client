import { css, keyframes, SerializedStyles } from '@emotion/react';
import { primaryColor } from '../../../../styles/color.style';

 interface Props {
   loading : boolean;
   color? : string;
   size? : number;
   margin? : number;
   speedMultiplier? : number;
}

const PulseLoader = ({
  loading, color = primaryColor, size = 15, margin = 2, speedMultiplier = 1,
} : Props) => {
  const pulse = keyframes`  
    0% {transform: scale(1);opacity: 1}
    45% {transform: scale(0.1);opacity: 0.7}
    80% {transform: scale(1);opacity: 1}
  `;

  const style = (i: number): SerializedStyles => {
    return css`
      background-color: ${color};
      width: ${`${size}px`};
      height: ${`${size}px`};
      margin: ${`${margin}px`};
      border-radius: 100%;
      display: inline-block;
      animation: ${pulse} ${0.75 / speedMultiplier}s ${(i * 0.12) / speedMultiplier}s infinite
        cubic-bezier(0.2, 0.68, 0.18, 1.08);
      animation-fill-mode: both;
    `;
  };

  return loading ? (
    <span>
      <span css={style(1)} />
      <span css={style(2)} />
      <span css={style(3)} />
    </span>
  ) : null;
};

export default PulseLoader;
