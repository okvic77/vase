import {App, About, Home, NotFound} from 'views'

let { Router, Route, Link, browserHistory } = ReactRouter;



jQuery(document).ready(function ($) {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Home}>
        <Route path="about" component={About}/>
        <Route path="users" component={App}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), document.getElementById('app'))
});
