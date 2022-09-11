import brandList from '@/lib/brandList';
import Image from 'next/image';

/**
 * Renders Disney+ brand logos with a background video that plays on hover.
 * @returns {JSX.Element}
 */
export default function Brands() {
  return (
    <section className="m-8 flex flex-row flex-wrap place-content-center gap-6">
      {brandList.map((brand) => (
        <div key={brand.name} className="brand group">
          <Image
            alt={brand.name}
            src={brand.logo}
            objectFit="cover"
            layout="fill"
          />
          <video
            autoPlay
            loop
            playsInline
            muted
            className="hidden rounded-md object-cover group-hover:inline"
          >
            <source src={brand.video} type="video/mp4" />
          </video>
        </div>
      ))}
    </section>
  );
}
