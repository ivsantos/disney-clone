import Image from 'next/image';
import streamDevices from '../../public/assets/images/streamDevices.png';

const StreamDevices = () => {
  return (
    <section className="px-5">
      <Image
        alt="Disney+ Possible stream devices"
        src={streamDevices}
        layout="responsive"
        objectFit="contain"
      />
      <h3 className="my-4 text-center text-[26px] font-semibold leading-9">
        Disfruta de Disney+ en compañía
      </h3>
      <ul className="ml-10 mb-24 list-disc space-y-5 text-base text-silver">
        <li>
          Noches de series y películas con GroupWatch. Para invitar o que te
          inviten a GroupWatch, es necesario tener una suscripción.
        </li>
        <li>
          Disfruta de Disney+ en compañía, aunque estéis en diferentes lugares.
        </li>
        <li>Visualización simultánea con hasta 6 personas.</li>
        <li>Pausad, rebobinad y reaccionad juntos</li>
        <li>Fácil de configurar y compartir.</li>
      </ul>
    </section>
  );
};

export default StreamDevices;
