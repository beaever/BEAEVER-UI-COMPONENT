import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProp {
  children?: React.ReactNode;
}

const isSSR = () => {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

export const Portal = ({ children }: PortalProp) => {
  const element = useMemo(
    () => (isSSR() ? null : document.createElement('div')),
    []
  );
  useEffect(() => {
    if (!element) return;
    element.id = 'portal-root';
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  }, [element]);

  if (!element) return null;
  return createPortal(children, element);
};
