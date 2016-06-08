"use strict";
//ES5
var React = require('react');
var PubSub = require('pubsub-js');
var EVENT_KEYS = require('./globals').EVENT_KEYS;
var ComponentLifecycleMixin = require('./ComponentLifecycleMixins');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var ListComponent = require('./ListComponent');
var FormComponent = require('./FormComponent');
var Root = React.createClass({
	displayName: 'Root',
	mixins: [ComponentLifecycleMixin, PureRenderMixin],
	getInitialState: function () {
		return {
			articleTitle: null,
			article: {},
			newArticle: null
		};
	},
	componentWillMount: function () {
		PubSub.subscribe(EVENT_KEYS.LIST_CLICK, function (message, data) {
			this.setState({article: data, articleTitle: data.subject});
		}.bind(this));
		PubSub.subscribe(EVENT_KEYS.DATA_CHANGE, function (message, data) {
			this.setState({newArticle: data, articleTitle: data.subject});
		}.bind(this));
	},
	render: function () {
		return (
			<div className="root-container">
				<h1 className="title">{this.state.articleTitle}</h1>
				<div className="row">
					<ListComponent newArticle={this.state.newArticle}/>
					<FormComponent article={this.state.article}/>
				</div>
			</div>
		);
	}
});
module.exports = Root;
