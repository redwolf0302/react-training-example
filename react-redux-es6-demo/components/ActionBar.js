/**
 * Created by evan on 16/6/1.
 */
import React from 'react'
class ActionBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button onClick={this.props.createArticleCallback}>添加文章</button>
			</div>
		);
	}
}
ActionBar.propTypes = {
	createArticleCallback: React.PropTypes.func.isRequired
};

export default ActionBar;