import React, { useState, useEffect, useRef } from 'react';
import { InputProps } from './Input.types';
import * as styles from './Input.styles';

const Input = ({
  onChange,
  className,
  type = 'text',
  name,
  mode = 'search',
  value,
  setState,
}: InputProps) => {
  const testRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={className} css={styles.wrapperStyle}>
      <div css={styles.inputWrapperStyle(value, mode)}>
        {mode === 'search' && (
          <div css={styles.inconStyle}>
            <div>검색</div>
          </div>
        )}
        <input
          ref={testRef}
          css={styles.inputStyle}
          onChange={onChange}
          type={type}
          name={name}
          value={value}
        />
        <div css={styles.inconStyle}>
          {value.length >= 1 && <div onClick={() => setState('')}>X</div>}
        </div>
      </div>
    </div>
  );
};

export default Input;
