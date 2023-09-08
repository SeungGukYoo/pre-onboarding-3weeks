import { useCallback, useEffect, useRef, useState } from 'react';
import { useDiseasStore } from '../context/DiseaseStoreContext';
import { useDisplay } from '../context/DisplayListContext';

function useOnidx() {
  const [isOnIndex, setIsOnIndex] = useState(-2);
  const data = useDiseasStore();
  const targetRef = useRef<HTMLUListElement>(null);
  const display = useDisplay();

  const moveList = useCallback(
    (e: KeyboardEvent) => {
      e.stopPropagation();
      switch (e.code) {
        case 'ArrowUp':
          setIsOnIndex(pre => {
            if (pre <= 0) return (pre = 0);
            else pre -= 1;
            return pre;
          });
          break;
        case 'ArrowDown':
          setIsOnIndex(pre => {
            if (!data?.length) return pre;
            if (pre === data?.length - 1) return pre;
            else pre += 1;
            return pre;
          });
          break;
        default:
          return;
      }
    },
    [data?.length],
  );

  useEffect(() => {
    if (data && data?.length) {
      setIsOnIndex(-2);
    }
  }, [data]);

  useEffect(() => {
    if (display?.isFocused) {
      window.addEventListener('keyup', moveList);
    } else {
      window.removeEventListener('keyup', moveList);
    }
    return () => {
      window.removeEventListener('keyup', moveList);
    };
  }, [display?.isFocused, moveList]);

  useEffect(() => {
    const childItemChildren = targetRef.current?.children;
    if (childItemChildren && childItemChildren[isOnIndex]) {
      childItemChildren[isOnIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOnIndex, targetRef]);

  return { moveList, isOnIndex, targetRef };
}

export default useOnidx;
