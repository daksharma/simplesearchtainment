var angular = require('angular');
var angularMaterial = require('angular-material');

var simpleSearchtainmentApp = angular.module('simpleSearchtainmentApp', [
    'ngRoute',
    'ngResource',
    angularMaterial,
    'searchServiceModule',
    'simpleResultModule'
]);