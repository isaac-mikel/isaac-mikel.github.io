var myApp = angular.module('myApp', []);

myApp.config($routeProvider) {

$routeProvider

//home page
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    })
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    });
});

//Controllers ----------------------------
//home page controller
myApp.controller('mainController', function($scope) {
    $scope.message = 'home!';
});
myApp.controller('aboutController', function($scope) {
    $scope.message = 'about!';
});
myApp.controller('contactController', function($scope) {
    $scope.message = 'contact!';
});

function Main($scope, $http) {
    $scope.portfolioItems = [{
        id: 1,
        title: 'item 1',
        desc: 'item 1',
        thumbnail: 'images/thumbnail-character.png',
        link: '/characteranimation',
        date: '03.29.16'
    }, {
        id: 2,
        title: 'item 2',
        desc: 'item 2',
        thumbnail: 'images/thumbnail-dva.png',
        link: '/characteranimation',
        date: '12.19.15'
    }, {
        id: 3,
        title: 'item 3',
        desc: 'item 3',
        thumbnail: 'images/thumbnail-insight.png',
        link: '/characteranimation',
        date: '11.23.15'
    }, ];

}

//$(document).ready(function() {});
