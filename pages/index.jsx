import Head from 'next/head';
import Image from 'next/image';
import bgSmall from '../public/assets/images/bg-small.jpeg';
import bgLarge from '../public/assets/images/bg-large.jpeg';

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Disney+ España | Historias que esperas + historias que no imaginas
        </title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main>
        <div className="absolute top-0 -z-10 h-full w-full md:hidden">
          <Image
            alt="Disney+ Content Background Image"
            src={bgSmall}
            priority={true}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="absolute -z-10 hidden h-full w-full md:block">
          <Image
            alt="Disney+ Content Background Image"
            src={bgLarge}
            priority={true}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <section className="m-auto grid min-h-[70vh]  w-screen max-w-[90%] place-content-center gap-4">
          <div className="relative -z-10 h-20 w-36 justify-self-center">
            <Image
              alt="Disney+ Brand Logo"
              src="/assets/images/logo.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-center text-xl font-semibold">
            Historias que esperas + historias que no imaginas
          </h1>
          <h3 className="text-center text-2xl font-semibold sm:text-2xl">
            8,99 €<span className="text-xs"> / mes</span>
          </h3>
          <a className="cta m-auto w-4/5 px-6 py-3 text-sm sm:text-base">
            Suscríbete ya
          </a>
        </section>
      </main>
    </>
  );
};

export default Home;
