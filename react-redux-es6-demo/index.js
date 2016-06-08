/**
 * Created by evan on 16/5/5.
 */
'use strict';
import 'babel-polyfill'
import './styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'

import reducers from './reducers'
import Root from './containers/Root'

let createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);
let store = createStoreWithMiddleware(reducers);

let rootContainer = document.getElementById('react-demo');
ReactDOM.render(
	<Provider store={store}>
		<Root/>
	</Provider>,
	rootContainer);