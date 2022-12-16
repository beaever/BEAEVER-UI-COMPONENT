import React, { useCallback, useState } from 'react';

// display show, hidden 반복적으로 사용되는 hook 분리
const useDisplay = (
  initialState: boolean,
): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  () => void,
  () => void,
  () => void,
] => {
  const [display, setDisplay] = useState<boolean>(initialState);

  const openDisplay = useCallback(() => {
    setDisplay(true);
  }, []);

  const closeDisplay = useCallback(() => {
    setDisplay(false);
  }, []);

  const toggleDisplay = useCallback(() => {
    setDisplay(!display);
  }, []);

  return [display, setDisplay, openDisplay, closeDisplay, toggleDisplay];
};

export default useDisplay;
