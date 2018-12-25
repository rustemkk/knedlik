/* eslint import/no-unresolved:0 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import logo from 'images/logo.svg';

import s from './index.scss';


class TopMenu extends Component {
  render() {
    return (
      <div className={s.Menu}>
        <Link className={s.MenuItem} to="/accounts">
          Accounts
        </Link>
        <Link className={s.MenuItem} to="/categories">
          Categories
        </Link>
      </div>
    );
  }
}

export default TopMenu;
