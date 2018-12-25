/* eslint import/no-unresolved:0 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Route path="/accounts/:accountId?" component={() => <div>AccountsPage</div>}/>
            <Route path="/categories/:categoryId?" component={() => <div>CategoriesPage</div>}/>
            <Route component={() => <div>Page not found :)</div>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
