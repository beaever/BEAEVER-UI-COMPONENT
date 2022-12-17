import { ComponentMeta } from '@storybook/react';
import * as icons from './svg';
import { css } from '@emotion/react';
import { Icon, IconProps, IconType } from './Icon';

const layout = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px 10px;
`;

export default {
  title: 'general/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: icons,
      },
    },
    color: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Icon>;

export const Base = (args: IconProps) => {
  return (
    <div css={layout}>
      <Icon {...args} icon='icAlert' />
    </div>
  );
};
