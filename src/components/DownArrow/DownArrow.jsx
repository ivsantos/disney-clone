/**
 * Renders the down arrow (SVG) component.
 * @param {any} props
 * @returns {JSX.Element}
 */
const DownArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="#c0c0c0"
    {...props}
  >
    <path fill="none" d="M0 0h48v48H0z" />
    <title>{'Down Arrow'}</title>
    <path d="M36.63 18.37a1.37 1.37 0 0 1 2.15.37 1.7 1.7 0 0 1-.3 2.06L25.4 32.64a1.37 1.37 0 0 1-1.85 0l-13-11.84a1.71 1.71 0 0 1-.29-2.06 1.37 1.37 0 0 1 2.15-.37l12.11 11ZM24.25 31.42a.38.38 0 0 1 .46 0l-.23-.21ZM11.71 19.55s0 .06 0 0Zm25.61 0Z" />
  </svg>
);

export default DownArrow;
