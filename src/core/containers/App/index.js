/* eslint import/no-unresolved:0 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AccountsPage from 'accounts/pages/AccountsPage';
import CategoriesPage from 'categories/pages/CategoriesPage';

import Modals from '../Modals';
import TopMenu from '../TopMenu';
import s from './index.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className={s.App}>
          <TopMenu/>
          <Switch>
            <Route exact path="/" component={() => <div>1</div>}/>
            <Route path="/accounts/:accountId?" component={() => <AccountsPage/>}/>
            <Route path="/categories/:categoryId?" component={() => <CategoriesPage/>}/>
            <Route component={() => <div>Page not found :)</div>}/>
          </Switch>
          <Modals/>
        </div>
      </Router>
    );
  }
}

export default App;
