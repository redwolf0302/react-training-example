/**
 * Created by evan on 16/6/1.
 */
import React from 'react'

class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li onClick={this.props.articleSelectedCallback.bind(null, this.props.article)}>
				{this.props.article.subject}
			</li>
		);
	}
}
Item.propTypes = {
	article: React.PropTypes.shape({
		id: React.PropTypes.number,
		subject: React.PropTypes.string,
		memo: React.PropTypes.string
	}),
	articleSelectedCallback: React.PropTypes.func.isRequired
};

export default Item;