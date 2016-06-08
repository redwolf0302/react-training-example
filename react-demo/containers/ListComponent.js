/**
 * Created by evan on 16/5/22.
 */
"use strict";
//ES5
var React = require('react');
var PubSub = require('pubsub-js');
var EVENT_KEYS = require('./globals').EVENT_KEYS;
var article_data = require('./globals').article_data;
var ComponentLifecycleMixin = require('./ComponentLifecycleMixins');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var ActionBar = React.createClass({
	displayName: 'ActionBar',
	mixins: [ComponentLifecycleMixin],
	propTypes: function () {
		return {
			createArticleCallback: React.PropTypes.func.isRequired
		};
	},
	render: function () {
		return (
			<div>
				<button onClick={this.props.createArticleCallback}>添加文章</button>
			</div>
		);
	}
});
var Item = React.createClass({
	displayName: 'Item',
	mixins: [ComponentLifecycleMixin],
	propTypes: function () {
		return {
			article: React.PropTypes.shape({
				id: React.PropTypes.number,
				subject: React.PropTypes.string,
				memo: React.PropTypes.string
			}),
			articleSelectedCallback: React.PropTypes.func.isRequired
		};
	},
	render: function () {
		return (
			<li onClick={this.props.articleSelectedCallback.bind(null, this.props.article)}>
				{this.props.article.subject}
			</li>
		);
	}
});
var List = React.createClass({
	displayName: 'List',
	mixins: [ComponentLifecycleMixin],
	propTypes: function () {
		return {
			articleData: React.PropTypes.array.isRequired,
			articleSelectedCallback: React.PropTypes.func.isRequired
		};
	},
	renderItems: function () {
		var parent = this;
		return this.props.articleData.map(function (article) {
			return (<Item key={article.id}
						  article={article}
						  articleSelectedCallback={parent.props.articleSelectedCallback}/>);
		}.bind(this));
	},
	renderList: function () {
		return (
			<ul>
				{this.renderItems()}
			</ul>
		);
	},
	render: function () {
		return (
			<div>
				{this.renderList()}
			</div>
		);
	}
});
var ListComponent = React.createClass({
	displayName: 'ListComponent',
	mixins: [ComponentLifecycleMixin, PureRenderMixin],
	propTypes: function () {
		return {
			newArticle: React.PropTypes.shape({
				id: React.PropTypes.number,
				subject: React.PropTypes.string,
				memo: React.PropTypes.string
			})
		};
	},
	getInitialState: function () {
		return {
			articleData: []
		};
	},
	componentWillMount: function () {
		this.setState({articleData: article_data});
	},

	componentWillUpdate(nextProps, nextState){
		var article_data = this.state.articleData;
		var data = nextProps.newArticle;
		if (data.id) {
			article_data.forEach(function (item) {
				if (data.id === item.id) {
					item.subject = data.subject;
					item.memo = data.memo;
				}
			});
		} else {
			data.id = (new Date()).valueOf();//模拟ID
			article_data.push(data);
		}
		this.setState({articleData: article_data});
	},

	articleSelectedHandler: function (article) {
		PubSub.publish(EVENT_KEYS.LIST_CLICK, article);
	},
	createArticleHandler: function () {
		PubSub.publish(EVENT_KEYS.LIST_CLICK, {});
	},
	render: function () {
		return (
			<div className="list-component">
				<ActionBar createArticleCallback={this.createArticleHandler}/>
				<List articleData={this.state.articleData}
					  articleSelectedCallback={this.articleSelectedHandler}/>
			</div>
		);
	}
});
module.exports = ListComponent;