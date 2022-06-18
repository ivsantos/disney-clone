import DisneyLogo from '../DisneyLogo/DisneyLogo';

const Footer = () => {
  return (
    <footer className="my-8">
      <div className="m-auto flex flex-col items-center space-y-2 text-xs text-silver">
        <div className="h-20 w-20">
          <DisneyLogo />
        </div>
        <div className="space-x-8">
          <a>Política de privacidad</a>
          <a>Política de cookies</a>
        </div>
        <div className="space-x-8">
          <a>Ayuda</a>
          <a>¿Quiénes somos?</a>
        </div>
        <p className="pt-4 text-center">
          © 2022 Disney y entidades relacionadas. Reservados todos los derechos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
