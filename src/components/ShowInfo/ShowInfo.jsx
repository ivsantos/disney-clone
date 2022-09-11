import ShowInteraction from '@/components/ShowInteraction/ShowInteraction';
import ShowRating from '@/components/ShowRating/ShowRating';
import { useCallback } from 'react';

/**
 * Renders the show info section.
 * @typedef {Object} Props
 * @property {DetailsType} details
 * @property {VideosType} videos
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function ShowInfo({ details, videos }) {
  const {
    title,
    name,
    genres,
    release_date,
    first_air_date,
    runtime,
    overview,
    vote_average,
  } = details;
  const { results: showVideos } = videos;

  const handleGenres = useCallback(() => {
    const genresList = genres.map((genre) => genre.name);
    const formatter = new Intl.ListFormat('en-US', {
      style: 'long',
      type: 'conjunction',
    });
    return formatter.format(genresList);
  }, [genres]);

  const handleDate = useCallback(() => {
    const date = new Date(release_date || first_air_date);

    return date.getFullYear();
  }, [release_date, first_air_date]);

  const handleRuntime = useCallback(() => {
    const minutes = runtime % 60;
    const hours = Math.floor(runtime / 60);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')} h`;
  }, [runtime]);

  return (
    <div id="show-info" className="mt-[30vh] max-w-3xl p-8 md:mt-[40vh]">
      <h2 className="mb-4 text-xl font-bold">{title || name}</h2>
      <div className="mb-6 flex flex-col gap-1">
        <p className="text-sm">{handleGenres()}</p>
        <p className="text-sm">{`${handleDate()}${
          runtime ? ` • ${handleRuntime()}` : ''
        }`}</p>
        <ShowRating rating={vote_average} />
      </div>
      <ShowInteraction videos={showVideos} />
      <p
        id="overview"
        className="text-lg font-thin tracking-wider text-gray-300"
      >
        {overview}
      </p>
    </div>
  );
}
