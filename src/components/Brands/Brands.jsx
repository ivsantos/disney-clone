import brandList from '@/lib/brandList';
import Image from 'next/image';

export default function Brands() {
  return (
    <section className="m-8 grid grid-flow-row grid-cols-brands place-content-center gap-6">
      {brandList.map((brand) => (
        <div key={brand.name} className="brand group">
          <Image alt="" src={brand.logo} objectFit="cover" layout="fill" />
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
