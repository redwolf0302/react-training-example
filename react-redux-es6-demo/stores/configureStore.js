/**
 * Created by evan on 16/6/14.
 */
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import reducers from '../reducers'

export default function configureStore(preloadedState) {
	return createStore(
		reducers,
		preloadedState,
		applyMiddleware(createLogger())
	);
}