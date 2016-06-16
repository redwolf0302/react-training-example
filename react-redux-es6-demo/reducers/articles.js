/**
 * Created by evan on 16/6/16.
 */
import * as ActionTypes from '../actions/ActionTypes'
const initialState = {articles: []};

const articlesReducer = (state = initialState, action)=> {
	if (action.type === ActionTypes.LOAD_ARTICLE) {
		return {
			articles: [...action.articles]
		};
	} else if (action.type === ActionTypes.SAVE_ARTICLE) {
		let {savedArticle} = action;
		if (savedArticle.id) {
			state.articles.map(function (article) {
				if (article.id === savedArticle.id) {
					article.subject = savedArticle.subject;
					article.memo = savedArticle.memo;
				}
			});
			return {
				articles: [...state.articles]
			};
		} else {
			savedArticle.id = (new Date()).valueOf();//模拟ID
			return {
				articles: [...state.articles, savedArticle]
			};
		}
	}
	return state;
};

export default articlesReducer;