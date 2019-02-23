/* eslint import/no-unresolved:0 */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import logo from 'images/logo.svg';

import s from './index.scss';


const TopMenu = () => (
  <div className={s.TopMenu}>
    <img className={s.Logo} src={logo} alt="logo"/>
    <NavLink className={s.MenuItem} activeClassName={s.MenuItemActive} exact to="/">
      Home
    </NavLink>
    <NavLink className={s.MenuItem} activeClassName={s.MenuItemActive} to="/accounts">
      Accounts
    </NavLink>
    <NavLink className={s.MenuItem} activeClassName={s.MenuItemActive} to="/categories">
      Categories
    </NavLink>
    <NavLink className={s.MenuItem} activeClassName={s.MenuItemActive} to="/transactions">
      Transactions
    </NavLink>
  </div>
);

export default withRouter(TopMenu);
