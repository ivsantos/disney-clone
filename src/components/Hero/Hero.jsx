import DisneyLogo from '@/components/DisneyLogo/DisneyLogo';
import DownArrow from '@/components/DownArrow/DownArrow';
import useHandleSession from '@/hooks/useHandleSession/useHandleSession';
import { HERO_ID } from '@/lib/constants';

/**
 * Renders the hero component.
 * @returns {JSX.Element}
 */
const Hero = () => {
  const { handleSignIn } = useHandleSession();
  const handleScrollIntoContent = (e) => {
    e.target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id={HERO_ID}
      className="m-auto grid min-h-[70vh] w-screen max-w-[90%] place-content-center gap-4 pt-36"
    >
      <div className="relative -z-10 h-20 w-32 justify-self-center md:w-40 lg:w-44">
        <DisneyLogo />
      </div>
      <h1 className="text-center text-xl font-semibold">
        {"Disney+ | Stories you expect + stories you can't imagine"}
      </h1>
      <h3 className="text-center text-2xl font-semibold sm:text-2xl">
        8,99 €<span className="text-xs"> / monthly</span>
      </h3>
      <div className="m-auto w-[90%] border-b-2 border-white border-opacity-20 pb-3 text-sm sm:text-base">
        <button
          type="button"
          onClick={handleSignIn}
          className="cta w-full px-6 py-4"
        >
          Subscribe now
        </button>
      </div>
      <h3 className="text-center text-2xl font-semibold sm:text-2xl">
        89,90 €<span className="text-xs"> / year</span>
      </h3>
      <p className="text-center text-sm text-silver">
        Save 2 months with annual subscription
      </p>
      <div className="m-auto w-[90%] pb-3 text-sm sm:text-base">
        <button
          type="button"
          onClick={handleSignIn}
          className="cta w-full px-6 py-4"
        >
          Subscribe and save
        </button>
      </div>
      <button
        type="button"
        onClick={handleScrollIntoContent}
        className="m-auto my-8 w-9 animate-bounce opacity-70 md:absolute md:bottom-8 md:right-12 md:hidden"
      >
        <DownArrow />
      </button>
    </section>
  );
};

export default Hero;
