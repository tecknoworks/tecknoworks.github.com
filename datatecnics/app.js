// Generated by CoffeeScript 1.10.0
var app;

app = angular.module('app', ['ui.bootstrap', 'ngAnimate']);

app.controller('CarouselDemoCtrl', function($scope) {
  $scope.options = {
    interval: 5000,
    noWrapSlides: false
  };
  $scope.slides = [
    {
      image: 'images/img_carousel1.png',
      text: 'asd'
    }, {
      image: 'images/img_carousel2.png',
      text: 'asd'
    }, {
      image: 'images/img_carousel3.png',
      text: 'asd'
    }, {
      image: 'images/img_carousel4.png',
      text: 'asd'
    }, {
      image: 'images/img_carousel5.png',
      text: 'asd'
    }, {
      image: 'images/img_carousel6.png',
      text: 'asd'
    }
  ];
  $scope.addSlide = function(img, txt) {
    return $socpeslides.push({
      image: '//placekitten.com/' + newWidth + '/300',
      text: ''
    });
  };
});