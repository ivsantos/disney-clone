import DisneyLogo from '@/components/DisneyLogo/DisneyLogo';
import NavList from '@/components/NavList/NavList';
import useIntersection from '@/hooks/useIntersection/useIntersection';
import { HERO_ID } from '@/lib/constants';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

/**
 * Renders the header component.
 * @returns {JSX.Element}
 */
const Header = () => {
  const { data: session } = useSession();
  const isIntersecting = useIntersection(`#${HERO_ID}`);
  const router = useRouter();

  let isDetailsPage = false;
  if (router.query?.show && router.query?.id) {
    isDetailsPage = true;
  }

  const handleSignIn = useCallback(() => {
    signIn(undefined, { callbackUrl: '/catalog' });
  }, []);

  const handleSignOut = useCallback(() => {
    signOut({ callbackUrl: '/' });
  }, []);

  return (
    <header>
      <nav
        className={`navbar fixed top-0 z-10 flex w-full items-center ${
          isIntersecting || isDetailsPage ? 'bg-transparent' : 'bg-primary'
        }`}
      >
        <div className="mr-3 ml-5 flex h-full w-full items-center justify-between sm:text-base">
          <Link href="/">
            <a
              className={`mr-4 w-16 transition-opacity duration-500 md:pointer-events-auto md:w-20 md:opacity-100 ${
                isIntersecting
                  ? 'pointer-events-none opacity-0'
                  : 'pointer-events-auto opacity-100'
              }`}
            >
              <DisneyLogo />
            </a>
          </Link>
          {session ? (
            <>
              <NavList />
              <button
                type="button"
                onClick={handleSignOut}
                className="cta-secondary m-[5px] flex h-10 items-center sm:text-xs md:text-sm"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <div className="flex">
              <button
                type="button"
                className={`cta m-[5px] flex h-10 items-center transition-opacity duration-500 ${
                  isIntersecting
                    ? 'pointer-events-none opacity-0'
                    : 'pointer-events-auto opacity-100'
                }`}
              >
                Suscríbete ya
              </button>
              <button
                type="button"
                onClick={handleSignIn}
                className="cta-secondary m-[5px] flex h-10 items-center"
              >
                Iniciar sesión
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
