import IconWrap from '@/components/IconWrap/IconWrap';
import ShowTrailer from '@/components/ShowTrailer/ShowTrailer';
import { IconPlayerPlay, IconPlus, IconUsers } from '@tabler/icons';
import { useCallback, useEffect, useState } from 'react';

/**
 * Renders the show interaction section.
 * @typedef {Object} Props
 * @property {VideosType} videos
 * @param {Props} props
 * @returns {JSX.Element | null}
 */
export default function ShowInteraction({ videos }) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [video, setVideo] = useState(false);

  const handleToggleTrailer = useCallback(() => {
    setShowTrailer((prevShowTrailerValue) => !prevShowTrailerValue);
  }, []);

  useEffect(() => {
    if (videos) {
      const videosFromYoutube = videos.filter(
        (video) => video.site === 'YouTube'
      );
      const officialTrailer = videosFromYoutube?.find((video) => {
        const { official, type } = video;
        if (official && type === 'Trailer') {
          return video;
        }
      });
      if (officialTrailer) {
        setVideo(officialTrailer);
      } else {
        setVideo(videosFromYoutube?.[0] || {});
      }
    }
  }, [videos]);

  return (
    <>
      <div id="button-group" className="mb-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          className="cta-view"
          onClick={handleToggleTrailer}
        >
          <IconWrap Icon={IconPlayerPlay} fill="#000" />
          <span className="pl-2">Ver</span>
        </button>
        <button
          type="button"
          className="cta-secondary p-4"
          onClick={handleToggleTrailer}
        >
          Tráiler
        </button>
        <div className="flex h-full items-center gap-4">
          <button type="button" className="cta-secondary rounded-full">
            <IconWrap Icon={IconPlus} />
          </button>
          <button type="button" className="cta-secondary rounded-full">
            <IconWrap Icon={IconUsers} fill="#fff" />
          </button>
        </div>
      </div>
      <ShowTrailer
        video={video}
        showTrailer={showTrailer}
        toggleTrailer={handleToggleTrailer}
      />
    </>
  );
}
