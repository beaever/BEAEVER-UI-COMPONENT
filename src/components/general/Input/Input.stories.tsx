import React, { useState } from 'react';

import Input from './Input';
import { css } from '@emotion/react';

export default {
  title: 'Components/Input',
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
  const test = css`
    width: 500px;
  `;

  return (
    <Input
      {...args}
      css={test}
      onChange={onChange}
      value={input}
      setState={setInput}
      name='네임이들어가니?'
    />
  );
};
