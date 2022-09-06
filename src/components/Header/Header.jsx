import DisneyLogo from '@/components/DisneyLogo/DisneyLogo';
import NavList from '@/components/NavList/NavList';
import { HERO_ID } from '@/lib/constants';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import useIntersection from 'src/hooks/useIntersection/useIntersection';

/**
 * Renders the header component.
 * @returns {JSX.Element}
 */
const Header = () => {
  const { data: session } = useSession();
  const isIntersecting = useIntersection(`#${HERO_ID}`);

  return (
    <header>
      <nav
        className={`navbar fixed top-0 z-10 flex w-full items-center ${
          isIntersecting ? 'bg-transparent' : 'bg-primary'
        }`}
      >
        <div
          className={`mr-3 ml-5 flex h-full w-full items-center sm:text-base ${
            session ? 'justify-between' : 'justify-start'
          }`}
        >
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
                onClick={() => signOut({ callbackUrl: '/' })}
                className="cta-secondary m-[5px] flex h-10 items-center"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <button
                className={`cta m-[5px] flex h-10 items-center transition-opacity duration-500 ${
                  isIntersecting
                    ? 'pointer-events-none opacity-0'
                    : 'pointer-events-auto opacity-100'
                }`}
              >
                Suscríbete ya
              </button>
              <button
                onClick={() => signIn(undefined, { callbackUrl: '/catalog' })}
                className="cta-secondary m-[5px] flex h-10 items-center"
              >
                Iniciar sesión
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
