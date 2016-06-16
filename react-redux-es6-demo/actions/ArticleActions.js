/**
 * Created by evan on 16/5/31.
 */
import * as ActionTypes from './ActionTypes'
import {article_data} from '../globals'

export function loadArticle() {
	return {
		type: ActionTypes.LOAD_ARTICLE,
		articles: article_data
	}
}

export function selectArticle(selectedArticle) {
	return {
		type: ActionTypes.SELECT_ARTICLE,
		selectedArticle
	}
}

export function createArticle() {
	return {
		type: ActionTypes.CREATE_ARTICLE
	}
}

export function saveArticle(savedArticle) {
	return {
		type: ActionTypes.SAVE_ARTICLE,
		savedArticle
	}
}