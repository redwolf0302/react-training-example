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