/**
 * Created by evan on 16/5/31.
 */
import {combineReducers} from 'redux'
import * as ActionTypes from '../actions/ActionTypes'
const initialState = {articles: []};
const listReducer = (state = initialState, action)=> {
	console.log(state);
	if (action.type === ActionTypes.LOAD_ARTICLE) {
		return {
			articles: [...state.articles]
		};
	}
	return state;
};
export default combineReducers({listReducer});