/**
 * Created by evan on 16/6/1.
 */
import React from 'react'

class Title extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<h1 className="title">{this.props.articleTitle}</h1>);
	}
}
Title.propTypes = {
	articleTitle: React.PropTypes.string
};

Title.defaultProps = {
	articleTitle: ''
};

export default Title;