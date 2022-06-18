import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import DisneyLogo from '@/components/DisneyLogo/DisneyLogo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`navbar fixed z-10 flex w-full items-center ${
          scrolled ? 'bg-primary' : 'bg-transparent'
        }`}
      >
        <div className="mr-3 flex h-full w-full items-center justify-end sm:text-base">
          <div
            className={`mr-4 w-16 transition-opacity duration-500 md:w-20 ${
              scrolled
                ? 'pointer-events-auto opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          >
            <DisneyLogo />
          </div>
          {session ? (
            <a className="cta-secondary m-[5px] flex h-10 items-center">
              Cerrar sesión
            </a>
          ) : (
            <>
              <a
                className={`cta m-[5px] flex h-10 items-center transition-opacity duration-500 ${
                  scrolled
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                }`}
              >
                Suscríbete ya
              </a>
              <a className="cta-secondary m-[5px] flex h-10 items-center">
                Iniciar sesión
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
