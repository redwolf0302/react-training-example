/**
 * Created by evan on 16/5/22.
 */
"use strict";
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Form from '../components/Form'

import * as actions from '../actions/ArticleActions'

class FormComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	saveArticleHandler(savedArticle) {
		let {actions} = this.props;
		actions.saveArticle(savedArticle);
	}

	render() {
		return (<Form article={this.props.article}
					  saveArticleCallback={this.saveArticleHandler.bind(this)}/>);
	}
}

FormComponent.propTypes = {
	article: React.PropTypes.shape({
		id: React.PropTypes.number,
		subject: React.PropTypes.string,
		memo: React.PropTypes.string
	})
};

FormComponent.defaultProps = {
	article: {}
};

const mapStateToProps = (state) => {
	return {}
};

const mapDispatchToProps = (dispatch)=> {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
