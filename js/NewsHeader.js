'use strict';

var $ = require('jquery');
var React = require('react');

var NewsHeader = React.createClass({
	
	getLogo: function () {
		return (
			<div className="newsHeader-logo">
				<a href="https://www.ycombinator.com"><img src="../img/y18.gif"/></a>
			</div>
		);
	},

	getTitle: function () {
		return (
			<div className="newsHeader-title">
				<a className="newsHeader-textLink" href="https://news.ycombinator.com">Hacker News</a>
			</div>
		);
	},

	render: function () {
		return (
			<div classNam="newsHeader">
				{this.getLogo()}
				{this.getTitle()}
			</div>
		);
	}

});

module.exports = NewsHeader;