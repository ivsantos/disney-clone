import useClickOutside from '@/hooks/useClickOutside/useClickOutside';
import useEscapeKey from '@/hooks/useEscapeKey/useEscapeKey';
import usePageVisibility from '@/hooks/usePageVisibility/usePageVisibility';
import { useRef } from 'react';

/**
 * Renders the show trailer inside a modal.
 * @typedef {Object} Props
 * @property {VideoResultsType} video
 * @property {boolean} showTrailer
 * @property {function} toggleTrailer
 * @param {Props} props
 * @returns {JSX.Element | null}
 */
export default function ShowTrailer({ video, showTrailer, toggleTrailer }) {
  const modalRef = useRef();
  const iframeRef = useRef();

  useEscapeKey(toggleTrailer);
  useClickOutside(modalRef, toggleTrailer);
  usePageVisibility({
    ref: iframeRef,
    actionOnHidden: () =>
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      ),
  });

  return (
    <div
      className={`${
        showTrailer ? 'block scale-100' : 'hidden scale-0'
      } fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-primary bg-opacity-50`}
    >
      {showTrailer && (
        <div
          ref={modalRef}
          className="relative h-[40vh] w-[90vw] rounded-xl bg-secondary p-8 text-primary md:h-[65vh] md:w-[65vw]"
        >
          <button
            type="button"
            className="absolute top-0 right-0 p-3 font-bold "
            onClick={toggleTrailer}
          >
            X
          </button>
          {/* enablejsapi query parameter is mandatory in order to use the embed API events */}
          <iframe
            ref={iframeRef}
            title={video.name}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.key}?enablejsapi=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
