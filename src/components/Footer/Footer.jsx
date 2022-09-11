import DisneyLogo from '@/components/DisneyLogo/DisneyLogo';
import TMBDLogo from '@/components/TMBDLogo/TMBDLogo';

/**
 * Renders the footer component, which contains the Disney+ logo and the TMDB logo for attribution.
 * as well as some mocked (empty) links to the privacy policy, cookies, reserved rights...
 * @returns {JSX.Element}
 */
const Footer = () => {
  return (
    <footer className="my-8">
      <div className="m-auto flex flex-col items-center space-y-2 text-xs text-silver">
        <div className="h-20 w-20">
          <DisneyLogo />
        </div>
        <div className="h-20 w-20">
          <a href="https://developers.themoviedb.org/3">
            <TMBDLogo />
          </a>
        </div>
        <div className="space-x-8">
          <a>Privacy policy</a>
          <a>Cookies policy</a>
        </div>
        <div className="space-x-8">
          <a>Help</a>
          <a>Who are we</a>
        </div>
        <p className="pt-4 text-center">
          © 2022 Disney and related entities. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
