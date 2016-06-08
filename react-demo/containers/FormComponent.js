/**
 * Created by evan on 16/5/22.
 */
"use strict";
//ES5
var React = require('react');
var PubSub = require('pubsub-js');
var EVENT_KEYS = require('./globals').EVENT_KEYS;
var ComponentLifecycleMixin = require('./ComponentLifecycleMixins');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var FormComponent = React.createClass({
	displayName: 'FormComponent',
	mixins: [ComponentLifecycleMixin, PureRenderMixin],
	propTypes: function () {
		return {
			article: React.PropTypes.shape({
				id: React.PropTypes.number,
				subject: React.PropTypes.string,
				memo: React.PropTypes.string
			})
		};
	},
	getInitialState: function () {
		return {
			article: this.props.article
		};
	},
	componentWillUpdate: function (nextProps, nextState) {
		this.setState({article: nextProps.article});
		this.refs.subject.value = nextProps.article.subject || '';
		this.refs.memo.value = nextProps.article.memo || '';
	},
	saveArticleHandler: function () {
		var data = this.state.article;
		data.subject = this.refs.subject.value;
		data.memo = this.refs.memo.value;
		PubSub.publish(EVENT_KEYS.DATA_CHANGE, data);
	},
	render: function () {
		return (
			<div className="form-component">
				<input ref="subject" placeholder="Please input subject"/>
				<textarea ref="memo" rows="10" placeholder="Please input memo"/>
				<button onClick={this.saveArticleHandler}>保存</button>
			</div>
		);
	}
});
module.exports = FormComponent;