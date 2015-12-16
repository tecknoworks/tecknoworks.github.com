app = angular.module('app', ['ui.bootstrap', 'ngAnimate', 'ngRoute'])

app.config ['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when('/home',
      templateUrl: 'partials/home.html'
      controller: 'HomeCtrl')
    .when('/about',
      templateUrl: 'partials/about.html'
      controller: 'AboutCtrl')
    .otherwise redirectTo: '/home'
  return
]

app.controller 'HomeCtrl', ($scope) ->

app.controller 'AboutCtrl', ($scope) ->

app.controller 'CarouselCtrl', ($scope) ->
  $scope.options =
    interval: 5000
    noWrapSlides: false
    slides: [
      {
        image: 'images/img_carousel1.png'
        text: 'asd'
      }
      {
        image: 'images/img_carousel2.png'
        text: 'asd'
      }
      {
        image: 'images/img_carousel3.png'
        text: 'asd'
      }
      {
        image: 'images/img_carousel4.png'
        text: 'asd'
      }
      {
        image: 'images/img_carousel5.png'
        text: 'asd'
      }
      {
        image: 'images/img_carousel6.png'
        text: 'asd'
      }
    ]

  return
