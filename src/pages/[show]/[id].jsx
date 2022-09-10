import { IMG_URL } from '@/lib/constants';
import { unstable_getServerSession } from 'next-auth/next';
import Head from 'next/head';
import Image from 'next/image';

import { authOptions } from '../api/auth/[...nextauth]';

export default function Id({ details, videos }) {
  console.log(details);
  console.log(videos);
  return (
    <>
      <Head>
        <title>{`Ver ${details.title} | Disney+`}</title>
      </Head>
      <section>
        <div className="relative">
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
        <p>{details.title}</p>
      </section>
    </>
  );
}

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

  // const { show, id } = context.query;

  // API calls for 1: details and 2: videos of a selected show
  // const calls = [
  //   `https://api.themoviedb.org/3/${show}/${id}?api_key=${process.env.TMBD_API_KEY}&language=en-US`,
  //   `https://api.themoviedb.org/3/${show}/${id}/videos?api_key=${process.env.TMBD_API_KEY}&language=en-US`,
  // ];

  // const fetchedData = await Promise.allSettled(
  //   calls.map((call) => fetch(call))
  // );
  // const [details, videos] = await Promise.all(
  //   fetchedData.map((fetched) => fetched.value.json())
  // );

  const details = {
    adult: false,
    backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    belongs_to_collection: {
      id: 230,
      name: 'The Godfather Collection',
      poster_path: '/9Baumh5J9N1nJUYzNkm0xsgjpwY.jpg',
      backdrop_path: '/3WZTxpgscsmoUk81TuECXdFOD0R.jpg',
    },
    budget: 6000000,
    genres: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 80,
        name: 'Crime',
      },
    ],
    homepage: 'http://www.thegodfather.com/',
    id: 238,
    imdb_id: 'tt0068646',
    original_language: 'en',
    original_title: 'The Godfather',
    overview:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    popularity: 103.677,
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    production_companies: [
      {
        id: 4,
        logo_path: '/gz66EfNoYPqHTYI4q9UEN4CbHRc.png',
        name: 'Paramount',
        origin_country: 'US',
      },
      {
        id: 10211,
        logo_path: null,
        name: 'Alfran Productions',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America',
      },
    ],
    release_date: '1972-03-14',
    revenue: 245066411,
    runtime: 175,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
      {
        english_name: 'Italian',
        iso_639_1: 'it',
        name: 'Italiano',
      },
      {
        english_name: 'Latin',
        iso_639_1: 'la',
        name: 'Latin',
      },
    ],
    status: 'Released',
    tagline: "An offer you can't refuse.",
    title: 'The Godfather',
    video: false,
    vote_average: 8.712,
    vote_count: 16535,
  };

  const videos = {
    id: 238,
    results: [
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The Godfather Never Before Seen Footage (Rare Footage 1971)',
        key: 'wA6iB3OZDus',
        site: 'YouTube',
        size: 1080,
        type: 'Featurette',
        official: false,
        published_at: '2022-04-20T13:00:24.000Z',
        id: '627e773920e6a534876391df',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'THE GODFATHER | Opening Scene | Paramount Movies',
        key: 'eZHsmb4ezEk',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: true,
        published_at: '2022-03-22T15:59:49.000Z',
        id: '627e772c006eee3428a4ae9f',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: '50th Anniversary Trailer',
        key: 'Ew9ngL1GZvs',
        site: 'YouTube',
        size: 2160,
        type: 'Trailer',
        official: true,
        published_at: '2022-01-13T13:59:54.000Z',
        id: '61e4e0704f58010019f1fc53',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The Godfather (1972) ORIGINAL TRAILER [HD 1080p]',
        key: 'Ma1-sIoZnMs',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
        official: false,
        published_at: '2019-11-08T02:00:02.000Z',
        id: '62e5ca86fc5f060059c2f62f',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: "Marlon Brando on Rejecting His Oscar for 'The Godfather' | The Dick Cavett Show",
        key: 'rcCKczj4aK4',
        site: 'YouTube',
        size: 1080,
        type: 'Behind the Scenes',
        official: false,
        published_at: '2018-11-12T15:00:06.000Z',
        id: '627e7684b7d3520067e7a348',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The Godfather I (1972)- Baptism Scene, Michael Kills all the heads of the other families',
        key: '8Pf8BkFLBRw',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2016-11-10T18:47:45.000Z',
        id: '627e75eb2b93200050dd4b5b',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'Its not personal Sonny its strictly business',
        key: '60ZB-voPGv0',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2016-06-19T10:55:47.000Z',
        id: '627e7773caa50813cfa5f414',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The Godfather Top 5 Scenes',
        key: 'EawwtMHI5aE',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2016-05-11T16:47:02.000Z',
        id: '627e7720b7d35200ab0b6f6a',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: "Offer He Can't Refuse",
        key: 'fBNpSRtfIUA',
        published_at: '2016-03-06T22:19:42.000Z',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: true,
        id: '592199669251414ab10568ec',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: '"The Godfather 1" Best Scene HD',
        key: 'HiCnnsHfadU',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2014-11-07T06:39:48.000Z',
        id: '627e75fecaa50813cd6341f6',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'Opening Scene Godfather',
        key: 'OIBpHO1gZgQ',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2014-02-03T14:41:58.000Z',
        id: '627e7753873f000066c28bfc',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The Godfather Part 1 - The Meeting',
        key: '2D_zITtVJGA',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2013-08-24T20:09:30.000Z',
        id: '627e760bc92c5d0068aa9dc8',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'the godfather best scene',
        key: 'i96VS_z8y7g',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2013-04-25T22:09:46.000Z',
        id: '627e75dbcaa50813ce872ea7',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The Godfather (3/9) Movie CLIP - Killing Sollozzo and McCluskey (1972) HD',
        key: 'ppjyB2MpxBU',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2011-11-22T18:06:39.000Z',
        id: '627e762ead59b5133cd97c1a',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The Godfather (6/9) Movie CLIP - Working for My Father (1972) HD',
        key: 'voNs3aHZmQM',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2011-11-22T18:06:31.000Z',
        id: '627e7650873f000050f3d0b8',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'Sonny is Killed - The Godfather (4/9) Movie CLIP (1972) HD',
        key: 'sJU2cz9ytPQ',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2011-11-22T17:21:34.000Z',
        id: '627e76365aadc41363ad88f9',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The Godfather (5/9) Movie CLIP - Michael Loses Apollonia (1972) HD',
        key: 'SWAJPB_5rSs',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2011-11-22T17:21:20.000Z',
        id: '627e7644873f0000a9e1eab3',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: "It's Strictly Business - The Godfather (2/9) Movie CLIP (1972) HD",
        key: '0qvpcfYFHcw',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2011-11-22T17:20:57.000Z',
        id: '627e7625cee4810050239b0f',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The New Godfather - The Godfather (9/9) Movie CLIP (1972) HD',
        key: 'DvD9OryD6mY',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2011-11-22T17:20:09.000Z',
        id: '627e7671caa50813cd63440b',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: "Don't Ever Take Sides Against the Family - The Godfather (7/9) Movie CLIP (1972) HD",
        key: 'jYnRBX2Trtk',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2011-11-22T17:10:10.000Z',
        id: '627e765bb7d3520067e7a319',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The Baptism Murders - The Godfather (8/9) Movie CLIP (1972) HD',
        key: '1CDlBLvc3YE',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2011-11-22T17:01:17.000Z',
        id: '627e7668fd140b0053b131e2',
      },
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'The Horse Head - The Godfather (1/9) Movie CLIP (1972) HD',
        key: 'VC1_tdnZq1A',
        site: 'YouTube',
        size: 1080,
        type: 'Clip',
        official: false,
        published_at: '2011-11-22T16:46:50.000Z',
        id: '627e761bad59b5133e8b6a97',
      },
    ],
  };

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
