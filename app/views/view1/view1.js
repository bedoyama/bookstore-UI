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
                    $scope.books = response.data;
                    console.log($scope.books);
                }, function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }

        getBooks();
    }]);