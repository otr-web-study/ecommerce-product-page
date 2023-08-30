import { useEffect, useState } from 'react';
import { useMatchMedia } from '@/app/hooks/useMatchMedia';

export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMdScreen] = useMatchMedia(['(min-width: 768px)']);

  const toggleSidebarIsOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isMdScreen) {
      setIsSidebarOpen(false);
    }
  }, [isMdScreen]);

  return { isSidebarOpen, toggleSidebarIsOpen, isMdScreen };
};
