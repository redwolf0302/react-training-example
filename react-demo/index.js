/**
 * Created by evan on 16/5/5.
 */
'use strict';
//ES5
require('./styles/main.css');
var React = require('react');
var Perf = require('react-addons-perf');
window.Perf = Perf;
var ReactDOM = require('react-dom');
var Root = require('./containers/Root');

var rootContainer = document.getElementById('react-demo');
ReactDOM.render(<Root/>, rootContainer);
//以上表达式等同于
//ReactDOM.render(React.createElement(Root), rootContainer);
