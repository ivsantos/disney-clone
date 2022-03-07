const Header = () => {
  return (
    <header>
      <nav className="navbar mr-10 flex items-center">
        {/* <Image src="/assets/images/logo.svg" alt="Disney+ Brand Logo" /> */}
        <a className="cta text-sm sm:text-base">Suscríbete ya</a>
        <a className="cta-secondary m-[5px] inline-flex h-10 text-sm sm:text-base">
          Iniciar sesión
        </a>
      </nav>
    </header>
  );
};

export default Header;
