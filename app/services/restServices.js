'use strict';

angular.module('myApp')
    .service('restService', function ($http) {
        var urlBase = 'http://localhost:8090/';

        this.getBooks = function () {
            return $http.get(urlBase + 'book/');
        };
    });