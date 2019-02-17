import { get as g } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import ClickOutHandler from 'react-onclickout';

import SvgIcon from '../SvgIcon';
import s from './index.scss';


class Dropdown extends Component {

  state = {
    isDropdownOpen: false
  };

  onSelect(value) {
    this.props.onSelect(value);
    this.onUpdateIsDropdownOpen(null, false);
  }

  onUpdateIsDropdownOpen(e, value) {
    e && e.preventDefault();
    this.setState({ isDropdownOpen: value });
  }

  render() {
    const { options, selectedValue } = this.props;
    const { isDropdownOpen } = this.state;
    const selectedOption = options.find(o => o.value === selectedValue);

    return (
      <div className={s.Dropdown}>
        <div className={s.DropdownTrigger} onClick={e => this.onUpdateIsDropdownOpen(e, !isDropdownOpen)}>
          {g(selectedOption, 'label', 'Select')}
          <SvgIcon className={s.IconArrowSimpleDown} name="arrowSimpleDown" size={26}/>
        </div>
        {isDropdownOpen &&
          <ClickOutHandler onClickOut={() => this.onUpdateIsDropdownOpen(null, false)}>
            <div className={s.DropdownContent}>
              <Scrollbars autoHeight autoHeightMin={30} autoHeightMax={350}>
                {options.map(({ label, value }) =>
                  <div className={s.Option} key={value} onClick={() => this.onSelect(value)}>
                    {value === selectedValue && <SvgIcon className={s.IconCheck} name="check" size={20}/>}
                    {label}
                  </div>
                )}
              </Scrollbars>
            </div>
          </ClickOutHandler>
        }
      </div>
    );
  }
}

Dropdown.propTypes = {
  disabled: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.any,
};

export default Dropdown;
