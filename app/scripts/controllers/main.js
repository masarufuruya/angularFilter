'use strict';

/**
 * @ngdoc function
 * @name selectBoxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the selectBoxApp
 */
angular.module('selectBoxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.postLists = [
	    {'id':1, 'date': '2014/01/25', 'message':'test', 'status': 1},
	    {'id':2, 'date': '2014/01/24', 'message': 'テスト投稿', 'status': 2},
	    {'id':3, 'date': '2014/01/23', 'message': 'まさるの投稿', 'status': 1},
    ];
  });
