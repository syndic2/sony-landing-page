import { useRef } from 'react';

export const useScrollToComponent = () => {
  const componentRef = useRef<HTMLElement | null>();

  const scrollIntoComponent = () => {
    if (componentRef !== null) {
      componentRef.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return {
    componentRef,
    scrollIntoComponent
  };
};