import React from 'react';
import * as icons from './svg';
import { css } from '@emotion/react';

export type IconType = keyof typeof icons;
export interface IconProps {
  icon: IconType;
}

export interface IconBoxProps {
  icon: IconType;
  rotate?: number;
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}

const iconBoxStyle = (
  rotate: number,
  width?: string,
  height?: string,
  color?: string
) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotate(${rotate}deg);
  svg {
    width: ${width};
    height: ${height};

    g:first-of-type {
      path,
      circle {
        fill: none;
      }
    }

    path,
    circle {
      fill: ${color};
    }
  }
`;

const SVGIcon = ({ icon }: IconProps) => React.createElement(icons[icon]);

export const Icon = ({
  icon,
  rotate = 0,
  width,
  height,
  color = 'black',
  className,
}: IconBoxProps) => {
  return (
    <div css={iconBoxStyle(rotate, width, height, color)} className={className}>
      <SVGIcon icon={icon} />
    </div>
  );
};
