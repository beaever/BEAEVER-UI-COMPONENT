import React, { SetStateAction } from 'react';

export type InputModeType = 'input' | 'search';
export interface AutoSearchDataProps {
  key: string | number;
  content: string;
}
export interface InputProps {
  /** change Event */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** css를 위한 ClassName */
  className?: string;

  /** input의 타입을 지정 기본값 'text' */
  type?: string;

  /** input의 name을 지정 */
  name?: string;

  /** search mode를 선택 기본값은 input */
  mode?: InputModeType;

  /** input의 value */
  value: string;

  /** input의 setState */
  setState: React.Dispatch<SetStateAction<string>>;

  /** 자동완성 검색 박스의 데이터 */
}
