import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import List from './routes/List';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/list/:folder" component={List} />
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
