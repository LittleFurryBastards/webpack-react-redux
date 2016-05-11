import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.html';
import App from './components/App';
import UserContainer from './components/UserContainer';
import UserDetailsContainer from './components/UserDetailsContainer';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UserContainer} />
      <Route path="users">
       <Route path="/users/:id" component={UserDetailsContainer} />
     </Route>
    </Route>
  </Router>,
  document.getElementById('main')
);
