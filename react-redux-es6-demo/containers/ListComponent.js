/**
 * Created by evan on 16/5/22.
 */
"use strict";

import React from 'react'

import List from '../components/List'
import ActionBar from '../components/ActionBar'
// import {article_data} from '../globals'

class ListComponent extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	articleData: []
		// };
	}

	componentWillMount() {
		// this.setState({articleData: article_data});
	}

	componentWillUpdate(nextProps, nextState) {
		// var article_data = this.state.articleData;
		// var data = nextProps.newArticle;
		// if (data.id) {
		// 	article_data.forEach(function (item) {
		// 		if (data.id === item.id) {
		// 			item.subject = data.subject;
		// 			item.memo = data.memo;
		// 		}
		// 	});
		// } else {
		// 	data.id = (new Date()).valueOf();//模拟ID
		// 	article_data.push(data);
		// }
		// this.setState({articleData: article_data});
	}

	articleSelectedHandler(article) {
		// PubSub.publish(EVENT_KEYS.LIST_CLICK, article);
	}

	createArticleHandler() {
		// PubSub.publish(EVENT_KEYS.LIST_CLICK, {});
	}

	render() {
		return (
			<div className="list-component">
				<ActionBar createArticleCallback={this.createArticleHandler}/>
				<List articleData={this.state.articleData}
					  articleSelectedCallback={this.articleSelectedHandler}/>
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

export default ListComponent;