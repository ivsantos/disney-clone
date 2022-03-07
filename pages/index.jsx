import Head from 'next/head';
import Image from 'next/image';

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
        <section className="m-auto grid h-[calc(100vh_-_52px)] w-screen  max-w-[80%] place-content-center gap-4 sm:h-[calc(100vh_-_70px)]">
          <div className="relative h-20 w-36 justify-self-center">
            <Image
              alt="Disney+ Brand Logo"
              src="/assets/images/logo.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-center">
            Historias que esperas + historias que no imaginas
          </h1>
          <h3 className="text-center text-xl sm:text-2xl">
            9,99 €<span className="text-sm"> / mes</span>
          </h3>
          <a className="cta m-auto w-4/5 px-6 py-3 text-sm sm:text-base">
            Suscríbete ya
          </a>
          <div className="absolute top-0 left-0 -z-10 h-full w-full">
            <Image
              alt="Disney+ Content Background Image"
              src="/assets/images/bg-small.jpeg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
