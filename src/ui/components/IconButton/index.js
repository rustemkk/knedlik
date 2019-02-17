/* eslint import/no-unresolved: 0 */
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import SvgIcon from 'ui/components/SvgIcon';

import s from './index.scss';


const IconButton = ({ className, onClick, name }) => (
  <span className={cn(s.IconButton, className)} onClick={onClick}>
    <SvgIcon className={s.Icon} name={name} size={26}/>
  </span>
);

IconButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default IconButton;
