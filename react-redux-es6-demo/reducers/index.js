/**
 * Created by evan on 16/5/31.
 */
import {combineReducers} from 'redux'
import articlesReducer from './articles'
import selectArticle from './selectArticle'

export default combineReducers({articles: articlesReducer, selectArticle});