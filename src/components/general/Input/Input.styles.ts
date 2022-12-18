import { css } from '@emotion/react';
import { Colors } from 'styles/themes';
import { AutoSearchDataProps, InputModeType } from './Input.types';

export const wrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

export const inputWrapperStyle = (value: string, mode: InputModeType) => {
  return css`
    display: flex;
    border: 1px solid ${value.length >= 1 && Colors.palette.blue100};
    padding: 0px 5px;
    height: 32px;
    align-items: center;
    border-radius: 5px;
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

export const searchBoxWrapperStyle = css`
  width: 100%;
`;
