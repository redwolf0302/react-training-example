/**
 * Created by evan on 16/5/5.
 */
'use strict';
import 'babel-polyfill'
import './styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './stores/configureStore'
import Root from './containers/Root'

let store = configureStore();

let rootContainer = document.getElementById('react-demo');
ReactDOM.render(
	<Provider store={store}>
		<Root/>
	</Provider>,
	rootContainer);