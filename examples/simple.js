require('../assets/index.css');
var React = require('react');
var Switch = require('rc-switch');

function onChange(value) {
  console.log('switch checked:' + value);
}

React.render(
  <div>
    <Switch onChange={onChange}></Switch>
  </div>, document.getElementById("__react-content"));
