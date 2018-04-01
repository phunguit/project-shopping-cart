import React, { Component } from 'react';
import { connect }			from 'react-redux';

class Notify extends Component {

	render() {
		var { message } = this.props;
		
		return (
			<div className="alert alert-success" role="alert" id="mnotification"><b>{ message }</b></div>
		);
	}

}

var mapStateToProps = (state) => {
	return {
		message: state.notify
	}
}

export default connect(mapStateToProps)(Notify);