'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope) {
    $scope.movies=[
        {
            title: 'A new hope of poop',
            url: 'http://youtube.com'
        },
        {
            title:'History like never before',
            url:'http://google.com'
        }
    ];
  });
