'use strict';

angular.module('myApp.bookList', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/book-list', {
            templateUrl: 'views/book-list/book-list.html',
            controller: 'BookListCtrl'
        });
    }])

    .controller('BookListCtrl', ['$scope', 'restService', function ($scope, restService) {
        function getBooks() {
            restService.getBooks()
                .then(function (response) {
                    $scope.response = response.data;
                    $scope.wrapper = $scope.response['_embedded'];
                    $scope.books = $scope.wrapper.book;

                    _.each($scope.books, function (book) {
                        console.log(book.year);
                    });
                }, function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }

        getBooks();
    }]);