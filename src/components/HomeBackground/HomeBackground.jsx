import bgLarge from '@/images/bg-large.jpeg';
import bgSmall from '@/images/bg-small.jpeg';
import Image from 'next/image';

/**
 * Renders the home background component.
 * @returns {JSX.Element}
 */
const HomeBackground = () => {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full md:hidden">
        <Image
          alt="Disney+ content"
          src={bgSmall}
          priority={true}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="absolute -z-10 hidden h-full w-full md:block">
        <Image
          alt="Disney+ content"
          src={bgLarge}
          priority={true}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </>
  );
};

export default HomeBackground;
