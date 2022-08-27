import brandList from '@/lib/brandList';
import Image from 'next/image';

export default function Brands() {
  return (
    <section className="mt-8 flex flex-col place-items-center gap-6 md:flex-row">
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
