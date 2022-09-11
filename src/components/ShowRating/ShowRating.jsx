import IconWrap from '@/components/IconWrap/IconWrap';
import { IconStar } from '@tabler/icons';
import { useEffect, useRef } from 'react';

const STAR_RATING = 5;

/**
 * Render a star rating based on the rating property of a movie or tv show.
 * @typedef {Object} Props
 * @property {number} rating
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function ShowRating({ rating }) {
  const ratingRef = useRef();

  useEffect(() => {
    if (ratingRef.current) {
      const maxRating = 10;
      const maxValue = 100;
      const ratingPercent = ((rating / maxRating) * maxValue).toFixed(1);
      ratingRef.current.style.width = `${ratingPercent}%`;
    }
  }, [rating, ratingRef]);

  return (
    <div id="show-extra-info" className="rating">
      <div ref={ratingRef} className="rating-upper">
        <span className="flex">
          {[...Array(STAR_RATING)].map((_, i) => (
            <IconWrap
              key={`rating-upper-${i}`}
              Icon={IconStar}
              fill="#facc15"
            />
          ))}
        </span>
      </div>
      <div className="rating-lower">
        <span className="flex">
          {[...Array(STAR_RATING)].map((_, i) => (
            <IconWrap key={`rating-lower-${i}`} Icon={IconStar} />
          ))}
        </span>
      </div>
    </div>
  );
}
