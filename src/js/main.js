'use strict';

var angular = require('angular');
console.log('Angular cargado');

// Carga de controladores
var TestCtrl = require('./controllers/TestCtrl');

var app = angular.module('app', []);

app.controller('TestCtrl', ['$scope', TestCtrl]);
