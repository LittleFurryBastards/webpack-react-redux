import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.html';
import App from './components/App';
import UserContainer from './components/UserContainer';
import UserDetails from './components/UserDetails';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UserContainer} />
      <Route path="users">
       <Route path="/users/:id" component={UserDetails} />
     </Route>
    </Route>
  </Router>,
  document.getElementById('main')
);
