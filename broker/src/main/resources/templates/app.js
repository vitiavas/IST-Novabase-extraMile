'use strict';



// Declare app level module which depends on filters, and services

var myApp = angular.module('brokerApp',  [
	'ngRoute',
	'brokerApp.controllers'


]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/broker', {templateUrl: 'broker.html', controller: 'BrokerController'});

}]);