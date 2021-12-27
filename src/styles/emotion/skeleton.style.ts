import { css } from '@emotion/react';

export const skeleton = css`
  background-repeat: no-repeat;
  background-image: /* layer 2: avatar */ /* white circle with 16px radius */ radial-gradient(circle 16px, white 99%, transparent 0),
    /* layer 1: title */ /* white rectangle with 40px height */ linear-gradient(white 40px, transparent 0),
    /* layer 0: card bg */ /* gray rectangle that covers whole element */ linear-gradient(gray 100%, transparent 0);
`;
