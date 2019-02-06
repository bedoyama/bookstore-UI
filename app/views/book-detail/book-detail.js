'use strict';

angular.module('myApp.bookDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/book-detail', {
    templateUrl: 'views/book-detail/book-detail.html',
    controller: 'BookDetailCtrl'
  });
}])

.controller('BookDetailCtrl', [function() {

}]);