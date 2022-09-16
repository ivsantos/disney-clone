import streamDevices from '@/images/streamDevices.png';
import Image from 'next/image';

/**
 * Renders the devices that can stream content.
 * @returns {JSX.Element}
 */
const StreamDevices = () => {
  return (
    <section className="flex flex-col px-5 md:flex-row">
      <div className="w-full md:max-w-[50%]">
        <Image
          alt="Disney+ Possible stream devices"
          src={streamDevices}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div>
        <h3 className="my-4 text-center text-[26px] font-semibold leading-9">
          Watch the way you want
        </h3>
        <ul className="ml-10 mb-24 list-disc space-y-5 text-base text-silver">
          <li>
            Host virtual movie nights with GroupWatch. Pause, rewind and react
            with up to six personal friends. To invite or be invited to join
            GroupWatch, subscription is required
          </li>
          <li>Download any movie or series and watch on-the-go</li>
          <li>Keep your family safe with easy parental controls</li>
          <li>
            An ever-growing range of titles in stunning 4K UHD and Dolby Atmos
            sound on compatible devices
          </li>
          <li>Stream on up to four devices at the same time</li>
        </ul>
      </div>
    </section>
  );
};

export default StreamDevices;
