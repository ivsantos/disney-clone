import ShowBackground from '@/components/ShowBackground/ShowBackground';
import ShowInfo from '@/components/ShowInfo/ShowInfo';
import { unstable_getServerSession } from 'next-auth/next';
import Head from 'next/head';

import { authOptions } from '../api/auth/[...nextauth]';

/**
 * @typedef {Object} Props
 * @property {Object} details
 * @property {Object} videos
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function Id({ details, videos }) {
  return (
    <>
      <Head>
        <title>{`Ver ${details.title || details.name} | Disney+`}</title>
      </Head>
      <section className="relative mt-header-small sm:mt-header-large">
        <article className="relative">
          <ShowBackground details={details} />
          <ShowInfo details={details} videos={videos} />
        </article>
      </section>
    </>
  );
}

/**
 * Grabs details and videos for a specified show via query parameters.
 * @param {any} context
 */
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  const { show, id } = context.query;

  // API calls for 1: details and 2: videos of a selected show
  const calls = [
    `https://api.themoviedb.org/3/${show}/${id}?api_key=${process.env.TMBD_API_KEY}&language=en-US`,
    `https://api.themoviedb.org/3/${show}/${id}/videos?api_key=${process.env.TMBD_API_KEY}&language=en-US`,
  ];

  const fetchedData = await Promise.allSettled(
    calls.map((call) => fetch(call))
  );
  const [details, videos] = await Promise.all(
    fetchedData.map((fetched) => fetched.value.json())
  );

  return {
    props: {
      details,
      videos,
    },
  };
}
// Siempre y cuando el vídeo sea de youtube:
// Coger el primer trailer que sea oficial
// Si no, coger el primer trailer que no sea oficial
// Si no, coger el primer video
