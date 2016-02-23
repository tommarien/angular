(function () {
    'use strict';

    angular
        .module('myApp.services', [])
        .factory('userService', userService);

    function userService($http) {

        function getUsers(page, pageSize) {
            return $http.get(`api/users?page=${page}&pageSize=${pageSize}`)
                .then(function (response) {
                    return response.data;
                })
        }

        function remove(id) {
            return $http.delete(`api/users/${id}`)
                .then(function (response) {
                    return response.data;
                });
        }

        return {
            getUsers: getUsers,
            remove: remove
        }

    }

})();
