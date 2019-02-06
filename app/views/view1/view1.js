'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'views/view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'restService', function ($scope, restService) {
        function getBooks() {
            restService.getBooks()
                .then(function (response) {
                    $scope.response = response.data;
                    $scope.wrapper = $scope.response['_embedded'];
                    $scope.books = $scope.wrapper.book;
                    console.log($scope.books);

                    _.each($scope.books, function (book) {
                        console.log(book.year);
                    });
                }, function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }

        getBooks();
    }]);