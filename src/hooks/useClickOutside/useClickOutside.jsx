import { useCallback, useEffect } from 'react';

const MOUSE_EVENT_TYPE = 'mousedown';
const TOUCH_EVENT_TYPE = 'touchstart';

export default function useClickOutside(ref, handleClose) {
  const handleClickOutside = useCallback(
    (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handleClose();
    },
    [ref, handleClose]
  );

  useEffect(() => {
    document.addEventListener(MOUSE_EVENT_TYPE, handleClickOutside, false);
    document.addEventListener(TOUCH_EVENT_TYPE, handleClickOutside, false);

    return () => {
      document.removeEventListener(MOUSE_EVENT_TYPE, handleClickOutside, false);
      document.removeEventListener(TOUCH_EVENT_TYPE, handleClickOutside, false);
    };
  }, [handleClickOutside]);
}
