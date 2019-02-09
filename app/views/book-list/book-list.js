'use strict';

angular.module('myApp.bookList', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/book-list', {
            templateUrl: 'views/book-list/book-list.html',
            controller: 'BookListCtrl'
        });
    }])

    .controller('BookListCtrl', ['$scope', 'restService', function ($scope, restService) {
        $scope.gridOptions = {
            columnDefs: [
                {
                    name: 'title',
                    cellTemplate: '<div class="ui-grid-cell-contents"><a href="{{COL_FIELD.link}}">{{ COL_FIELD.name }}</a> </div>'
                },
                {
                    name: 'year'
                },
                {
                    name: 'publisher'
                },
                {
                    name: 'description'
                },
                {
                    name: 'language'
                }
            ]
        };

        function getBooks() {
            restService.getBooks()
                .then(function (response) {
                    $scope.response = response.data;
                    $scope.wrapper = $scope.response['_embedded'];
                    $scope.books = $scope.wrapper.book;

                    $scope.gridOptions.data = _.map($scope.books, function (book) {
                        return {
                            title: {
                                name: book.title,
                                link: book._links.self.href
                            },
                            year: book.year,
                            publisher: book.publisher,
                            description: book.description,
                            language: book.language
                        };
                    });

                    console.log($scope.gridOptions.data);
                }, function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }

        getBooks();
    }]);