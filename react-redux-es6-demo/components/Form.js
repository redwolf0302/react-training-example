/**
 * Created by evan on 16/6/1.
 */
import React from 'react'

class Form extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUpdate(nextProps, nextState) {
		let {article} = nextProps;
		if (article) {
			this.refs.subject.value = article.subject || '';
			this.refs.memo.value = article.memo || ''
		}
	}

	saveHandler() {
		let {article} = this.props;
		let currentArticle = {
			subject: this.refs.subject.value,
			memo: this.refs.memo.value
		};
		let savedArticle = Object.assign({}, article, currentArticle);
		this.props.saveArticleCallback(savedArticle);
	}

	render() {
		return (
			<div className="form-component">
				<input ref="subject" placeholder="Please input subject"/>
				<textarea ref="memo" rows="10" placeholder="Please input memo"/>
				<button onClick={this.saveHandler.bind(this)}>保存</button>
			</div>
		);
	}
}

Form.propTypes = {
	saveArticleCallback: React.PropTypes.func.isRequired,
	article: React.PropTypes.shape({
		id: React.PropTypes.number,
		subject: React.PropTypes.string,
		memo: React.PropTypes.string
	})
};

export default Form;