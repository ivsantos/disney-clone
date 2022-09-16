import { URL_AUTHENTICATED, URL_UNAUTHENTICATED } from '@/lib/constants';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useCallback, useMemo } from 'react';

/**
 * Hook that handles the user session as a wrapper for the next-auth library.
 * @typedef {Object} Props
 * @property {boolean=} protectedRoute
 * @param {Props} props
 */
export default function useHandleSession({ protectedRoute } = {}) {
  const handleSignIn = useCallback(() => {
    signIn(undefined, { callbackUrl: URL_AUTHENTICATED });
  }, []);

  const handleSignOut = useCallback(() => {
    signOut({ callbackUrl: URL_UNAUTHENTICATED });
  }, []);

  const options = useMemo(() => {
    return protectedRoute
      ? {
          required: protectedRoute,
          onUnauthenticated() {
            handleSignOut();
          },
        }
      : undefined;
  }, [protectedRoute, handleSignOut]);

  const { data: session, status } = useSession(options);

  return { session, status, handleSignIn, handleSignOut };
}
