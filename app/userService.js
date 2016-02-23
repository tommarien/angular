(function () {
    'use strict';

   /* class UserService {
        constructor($http) {
            this.http = $http;
        }

        getUsers(page, pageSize) {
            return this.http.get(`api/users?page=${page}&pageSize=${pageSize}`)
                .then(function (response) {
                    return response.data;
                })
        }

        remove(id){
            return this.http.delete(`api/users/${id}`)
                .then(function (response) {
                    return response.data;
                });
        }
    }*/

    angular
        .module('myApp.services', [])
        .service('userService', UserService);

    function UserService($http) {
        this.getUsers = function (page, pageSize) {
            return $http.get(`api/users?page=${page}&pageSize=${pageSize}`)
                .then(function (response) {
                    return response.data;
                })
        };

        this.remove = function (id) {
            return $http.delete(`api/users/${id}`)
                .then(function (response) {
                    return response.data;
                });
        };
    }

})();
