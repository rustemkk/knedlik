/* eslint import/no-unresolved:0 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AccountsPage from 'accounts/pages/AccountsPage';
import CategoriesPage from 'categories/pages/CategoriesPage';
import TransactionsPage from 'transactions/pages/TransactionsPage';

import HomePage from '../../pages/HomePage';
import Modals from '../Modals';
import TopMenu from '../TopMenu';
import s from './index.scss';


const App = () => (
  <Router>
    <div className={s.App}>
      <TopMenu/>
      <div className={s.Page}>
        <Switch>
          <Route exact path="/" component={() => <HomePage/>}/>
          <Route path="/accounts" component={() => <AccountsPage/>}/>
          <Route path="/categories" component={() => <CategoriesPage/>}/>
          <Route path="/transactions" component={() => <TransactionsPage/>}/>
          <Route component={() => <div>Page not found :)</div>}/>
        </Switch>
      </div>
      <Modals/>
    </div>
  </Router>
);

export default App;
