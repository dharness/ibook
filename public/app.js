 var myapp = angular.module('myapp', ['ngRoute']);

 // configure our routes
 myapp.config(function($routeProvider) {
     $routeProvider
     // home page
     .when('/', {
         templateUrl: 'pages/landing.html',
         controller: 'landingController'
     })

     .when('/step1', {
         templateUrl: 'pages/step1.html'
     })

     .when('/step2', {
         templateUrl: 'pages/step2.html'
     })

     .when('/step3', {
         templateUrl: 'pages/step3.html'
     })

     .when('/step4', {
         templateUrl: 'pages/step4.html',
         controller: 'landingController'
     })

     .when('/pages', {
         templateUrl: 'pages/pages.html'
     })
 });