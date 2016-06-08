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
		this.state = {
			article: {},
			newArticle: null
		};
	}

	componentWillMount() {
		console.log(this.props);
		let {dispatch} = this.props;
		dispatch(loadArticle());//这是一种调用方式
	}

	render() {
		return (
			<div className="root-container">
				<Title/>
				<div className="row">
					<ListComponent articles={}/>
					<FormComponent article={this.state.article}/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {}
}

export default connect()(Root);