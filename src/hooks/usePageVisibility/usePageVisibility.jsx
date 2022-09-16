import {
  VISIBILITY_STATE_HIDDEN,
  VISIBILITY_STATE_VISIBLE,
} from '@/lib/constants';
import { useCallback, useEffect } from 'react';

const VISIBILITY_EVENT_TYPE = 'visibilitychange';

/**
 * Hook that executes an action when the page visibility changes.
 * @typedef {Object} Props
 * @property {{ current: HTMLElement}} ref
 * @property {function=} actionOnVisible
 * @property {function=} actionOnHidden
 * @param {Props} props
 */
export default function usePageVisibility({
  ref,
  actionOnVisible,
  actionOnHidden,
}) {
  const handleVisibilityChange = useCallback(() => {
    if (ref.current) {
      if (
        document.visibilityState === VISIBILITY_STATE_HIDDEN &&
        actionOnHidden
      ) {
        actionOnHidden();
      }
      if (
        document.visibilityState === VISIBILITY_STATE_VISIBLE &&
        actionOnVisible
      ) {
        actionOnVisible();
      }
    }
  }, [ref, actionOnVisible, actionOnHidden]);

  useEffect(() => {
    document.addEventListener(VISIBILITY_EVENT_TYPE, handleVisibilityChange);

    return () =>
      document.removeEventListener(
        VISIBILITY_EVENT_TYPE,
        handleVisibilityChange
      );
  }, [handleVisibilityChange]);
}
