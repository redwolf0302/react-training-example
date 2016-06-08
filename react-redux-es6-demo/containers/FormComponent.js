/**
 * Created by evan on 16/5/22.
 */
"use strict";
import React from 'react'

import Form from '../components/Form'
class FormComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	saveArticleHandler(updatedArticle) {
		/*var data = this.state.article;
		 data.subject = this.refs.subject.value;
		 data.memo = this.refs.memo.value;
		 PubSub.publish(EVENT_KEYS.DATA_CHANGE, data);*/
	}

	render() {
		return (<Form article={this.props.article}
					  saveArticleCallback={this.saveArticleHandler}/>);
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

export default FormComponent;
