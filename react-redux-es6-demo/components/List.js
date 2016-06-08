/**
 * Created by evan on 16/6/1.
 */
import React from 'react'
import Item from './Item'
class List extends React.Component {
	constructor(props) {
		super(props);
	}

	renderItems() {
		var parent = this;
		return this.props.articleData.map(function (article) {
			return (<Item key={article.id}
						  article={article}
						  articleSelectedCallback={parent.props.articleSelectedCallback}/>);
		}.bind(this));
	}

	renderList() {
		return (
			<ul>
				{this.renderItems()}
			</ul>
		);
	}

	render() {
		return (
			<div>
				{this.renderList()}
			</div>
		);
	}
}
List.propTypes = {
	articleData: React.PropTypes.array.isRequired,
	articleSelectedCallback: React.PropTypes.func.isRequired
};

export default List;