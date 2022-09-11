import { useCallback, useEffect } from 'react';

const KEY_EVENT_TYPE = 'keydown';
const KEY_NAME_ESC = 'Escape';

/**
 * Hook that handles the press of the escape key.
 * @param {function} handleClose
 */
export default function useEscapeKey(handleClose) {
  const handleEscKey = useCallback(
    (event) => {
      if (event.key === KEY_NAME_ESC) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);
}
