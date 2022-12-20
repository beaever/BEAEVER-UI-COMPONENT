import React, { useState } from 'react';

import Input from './Input';
import { css } from '@emotion/react';

export default {
  title: 'general/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Base = (args: any) => {
  const [input, setInput] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onClickDelete = () => {
    if (confirm('정말 삭제하시겠습니까?')) return setInput('');
  };
  const test = css`
    width: 500px;
  `;

  return (
    <Input
      {...args}
      css={test}
      onChange={onChange}
      value={input}
      onClickDelete={onClickDelete}
      name='네임이들어가니?'
    />
  );
};
