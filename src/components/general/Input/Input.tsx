import React, { useState, useEffect, useRef } from 'react';
import { InputProps } from './Input.types';
import * as styles from './Input.styles';
import { Icon } from '../Icon';

const Input = ({
  onChange,
  className,
  type = 'text',
  name,
  mode = 'search',
  value,
  onClickDelete,
}: InputProps) => {
  return (
    <div className={className} css={styles.wrapperStyle}>
      <div css={styles.inputWrapperStyle(value, mode)}>
        {mode === 'search' && (
          <div css={styles.inconStyle}>
            <Icon width='16px' height='16px' icon='icSearch' color='#ffff' />
          </div>
        )}
        <input
          css={styles.inputStyle}
          onChange={onChange}
          type={type}
          name={name}
          value={value}
        />
        <div onClick={onClickDelete} css={styles.inconStyle}>
          {value.length >= 1 && (
            <Icon
              className='input-close-icon'
              width='10px'
              height='10px'
              icon='icPopupClose'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
