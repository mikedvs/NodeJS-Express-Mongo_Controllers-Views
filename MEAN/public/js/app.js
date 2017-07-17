/* Angular custom app.js*/

console.log("App.js is loading from Public folder");

/* Angular CODE starts here */

angular.module('TestApp', []);

angular.module('TestApp')
	.controller('MainController', ctrlFunc);

function ctrlFunc() {
	this.people = clientPeople;
}