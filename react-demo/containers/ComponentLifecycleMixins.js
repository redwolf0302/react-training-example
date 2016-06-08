/**
 * Created by evan on 16/5/23.
 */
var ComponentLifecycleMixin = {
	componentWillMount: function () {
		console.log('[%s]componentWillMount', this.constructor.displayName);
	},
	componentDidMount: function () {
		console.log('[%s]componentDidMount', this.constructor.displayName);
	},
	componentWillUnmount: function () {
		console.log('[%s]componentWillUnmount', this.constructor.displayName);
	},
	componentWillReceiveProps: function (nextProps) {
		console.log('[%s]componentWillReceiveProps:nextProps=>%o', this.constructor.displayName, nextProps);
	},
	/*shouldComponentUpdate: function (nextProps, nextState) {
		console.log('[%s]shouldComponentUpdate:nextProps=>%o, nextState=>%o', this.constructor.displayName, nextProps, nextState);
		return true;
	},*/
	componentWillUpdate: function (nextProps, nextState) {
		console.log('[%s]componentWillUpdate:nextProps=>%o, nextState=>%o', this.constructor.displayName, nextProps, nextState);
	},
	componentDidUpdate: function (prevProps, prevState) {
		console.log('[%s]componentDidUpdate:prevProps=>%o, prevState=>%o', this.constructor.displayName, prevProps, prevState);
	}
};

module.exports = ComponentLifecycleMixin;