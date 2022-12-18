import { css } from '@emotion/react';
import { Colors } from '@src/styles/themes';
import { InputModeType } from './Input.types';

export const inputWrapperStyle = (mode: InputModeType, value: string) => {
  return css`
    display: flex;
    border: 1px solid ${value.length >= 1 && Colors.palette.blue100};
    padding: 0px 5px;
    height: 32px;
    align-items: center;
    ${mode === 'search'
      ? `border-radius: calc(0.5 * 44px)`
      : `border-radius: 5px`}
  `;
};

export const inputStyle = css`
  width: 100%;
  padding: 3px;
  :-webkit-autofill {
    box-shadow: inset;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }
`;

export const inconStyle = css`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
