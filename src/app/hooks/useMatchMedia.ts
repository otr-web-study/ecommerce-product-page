import { useLayoutEffect, useState } from 'react';

export const useMatchMedia = (queries: string[]) => {
  const [matches, setMatches] = useState<boolean[]>([]);

  useLayoutEffect(() => {
    const mediaQueryLists = queries.map((query) => matchMedia(query));
    const getValues = () => mediaQueryLists.map((list) => list.matches);

    const handler = () => {
      setMatches(getValues);
    };

    setMatches(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener('change', handler));

    return () => mediaQueryLists.forEach((list) => list.removeEventListener('change', handler));
  }, []);

  return matches;
};
