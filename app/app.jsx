
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var CountdownComponent = require('CountdownComponent');
var TimerComponent = require('TimerComponent');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
//$(document).foundation();

// App styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
<Router history={hashHistory}>
  <Route path='/' component={Main}>
  <IndexRoute component={TimerComponent} />
  <Route path='/countdown' component={CountdownComponent}></Route>
  </Route>
</Router>,
document.getElementById('app')
);
