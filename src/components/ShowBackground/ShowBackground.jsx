import { IMG_URL } from '@/lib/constants';
import Image from 'next/image';

/**
 * Renders the background image for the show page.
 * @typedef {Object} Props
 * @property {} details
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function ShowBackground({ details }) {
  return (
    <div className="fixed top-0 right-0 left-0 -z-10">
      <Image
        alt={details.title}
        src={`${IMG_URL}${details.backdrop_path || details.poster_path}`}
        priority={true}
        layout="responsive"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-radial" />
    </div>
  );
}
