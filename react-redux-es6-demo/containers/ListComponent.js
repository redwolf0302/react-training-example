/**
 * Created by evan on 16/5/22.
 */
"use strict";

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import List from '../components/List'
import ActionBar from '../components/ActionBar'

import * as actions from '../actions/ArticleActions'

class ListComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	articleSelectedHandler(article) {
		this.props.actions.selectArticle(article);
	}

	createArticleHandler() {
		this.props.actions.createArticle();
	}

	render() {
		return (
			<div className="list-component">
				<ActionBar createArticleCallback={this.createArticleHandler.bind(this)}/>
				<List articleData={this.props.articles}
					  articleSelectedCallback={this.articleSelectedHandler.bind(this)}/>
			</div>
		);
	}
}

ListComponent.propTypes = {
	articles: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.number,
		subject: React.PropTypes.string,
		memo: React.PropTypes.string
	}))
};

const mapStateToProps = (state) => {
	return {articles: state.articles.articles}
};

const mapDispatchToProps = (dispatch)=> {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);