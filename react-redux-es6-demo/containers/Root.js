"use strict";
import React from 'react'
import {connect} from 'react-redux'
import ListComponent from './ListComponent'
import FormComponent from './FormComponent'
import Title from '../components/Title'

import {loadArticle} from '../actions/ArticleActions'
class Root extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		let {dispatch} = this.props;
		dispatch(loadArticle());//这是一种调用方式
	}

	render() {
		let {articles, selectedArticle} = this.props;
		return (
			<div className="root-container">
				<Title articleTitle={selectedArticle?selectedArticle.subject:''}/>
				<div className="row">
					<ListComponent articles={articles}/>
					<FormComponent article={selectedArticle}/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		articles: state.articles.articles,
		selectedArticle: state.selectArticle.selectedArticle
	};
}

export default connect(mapStateToProps)(Root);