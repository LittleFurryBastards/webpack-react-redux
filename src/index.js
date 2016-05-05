import './index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import AnchorRoute from './routes/AnchorRoute';
import HomeRoute from './routes/HomeRoute';
import ButtonRoute from './routes/ButtonRoute';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeRoute} />
      <Route path="/anchor" component={AnchorRoute} />
      <Route path="/button" component={ButtonRoute} />
    </Route>
  </Router>,
  document.getElementById('main')
);
