import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import Link from 'next/link';

import DisneyLogo from '@/components/DisneyLogo/DisneyLogo';
import NavList from '@/components/NavList/NavList';

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHasScrolled(!entry.isIntersecting);
    }, options);

    const subscribeSection = document.querySelector('#subscribe-section');
    if (subscribeSection) {
      observer.observe(subscribeSection);
    }
  }, []);

  return (
    <header>
      <nav
        className={`navbar fixed z-10 flex w-full items-center ${
          hasScrolled ? 'bg-primary' : 'bg-transparent'
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
                hasScrolled
                  ? 'pointer-events-auto opacity-100'
                  : 'pointer-events-none opacity-0'
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
                  hasScrolled
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
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
