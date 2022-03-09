import DisneyLogo from '../DisneyLogo/DisneyLogo';
import DownArrow from '../DownArrow/DownArrow';

const HeroSection = () => {
  const handleScrollIntoContent = (e) => {
    e.target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="m-auto grid min-h-[70vh]  w-screen max-w-[90%] place-content-center gap-4 pt-36">
      <div className="relative -z-10 h-20 w-32 justify-self-center md:w-40 lg:w-44">
        <DisneyLogo />
      </div>
      <h1 className="text-center text-xl font-semibold">
        Historias que esperas + historias que no imaginas
      </h1>
      <h3 className="text-center text-2xl font-semibold sm:text-2xl">
        8,99 €<span className="text-xs"> / mes</span>
      </h3>
      <div className="m-auto w-[90%] border-b-2 border-white border-opacity-20 pb-3 text-sm sm:text-base">
        <a className="cta block w-full px-6 py-4">Suscríbete ya</a>
      </div>
      <h3 className="text-center text-2xl font-semibold sm:text-2xl">
        89,90 €<span className="text-xs"> / año</span>
      </h3>
      <p className="text-center text-sm text-silver">
        Ahorra 2 meses con la suscripción anual
      </p>
      <div className="m-auto w-[90%] pb-3 text-sm sm:text-base">
        <a className="cta block w-full px-6 py-4">Suscríbete y ahorra</a>
      </div>
      <button
        type="button"
        onClick={handleScrollIntoContent}
        className="m-auto my-8 w-9 animate-bounce opacity-70 md:absolute md:bottom-8 md:right-12"
      >
        <DownArrow />
      </button>
    </section>
  );
};

export default HeroSection;
