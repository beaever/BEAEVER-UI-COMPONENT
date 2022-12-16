import * as React from 'react';
import { useCallback, useState, ChangeEvent } from 'react';

// input change에서 반복적으로 사용되는 hook 분리
const useChange = (
  initialState: string
): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [value, setValue] = useState<string>(initialState);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, onChange];
};

export default useChange;
