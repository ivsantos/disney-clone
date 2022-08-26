/**
 * Wraps an icon passed as prop that can receive props.
 * @typedef {Object} Props
 * @property {JSX.Element} Icon
 * @property {any} props
 * @param {Props} props
 * @returns {JSX.Element}
 */
const IconWrap = ({ Icon, ...props }) => <Icon {...props} />;

export default IconWrap;
