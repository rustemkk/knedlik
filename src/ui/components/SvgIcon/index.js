import PropTypes from 'prop-types';
import React from 'react';


const icons = [
  'arrowSimpleDown',
  'bank',
  'building',
  'cake',
  'check',
  'child',
  'close',
  'card',
  'dollar',
  'fitness',
  'food',
  'laptop',
  'mood',
  'plus',
  'transport',
  'wallet',
  'waves',
  'work',
].reduce((acc, curr) => ({ ...acc, [curr]: require(`./svg/${curr}.svg`) }), {});

const SvgIcon = ({ className, name, size }) => (
  <span
    className={className}
    style={{
      maskImage: `url(${icons[name]})`,
      maskSize: size ? `${size}px` : '25px',
      maskRepeat: 'no-repeat',
      WebkitMaskImage: `url(${icons[name]})`,
      WebkitMaskSize: size ? `${size}px` : '25px',
      WebkitMaskRepeat: 'no-repeat',
      width: size ? `${size}px` : '25px',
      height: size ? `${size}px` : '25px',
      display: 'block'
    }}
  />
);

SvgIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default SvgIcon;

export const ACCOUNTS_ICONS = [
  'bank',
  'card',
  'wallet',
];

export const CATEGORIES_ICONS = [
  'bank',
  'building',
  'cake',
  'child',
  'fitness',
  'food',
  'laptop',
  'mood',
  'transport',
  'waves',
  'work',
];