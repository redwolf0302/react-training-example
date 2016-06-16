/**
 * Created by evan on 16/6/16.
 */
import * as ActionTypes from '../actions/ActionTypes'
const initialState = {selectedArticle: null};
const selectArticle = (state = initialState, action)=> {
	if (action.type === ActionTypes.SELECT_ARTICLE) {
		return {
			selectedArticle: action.selectedArticle
		}
	} else if (action.type === ActionTypes.CREATE_ARTICLE) {
		return {
			selectedArticle: {}
		}
	}
	return state;
};
export default selectArticle;