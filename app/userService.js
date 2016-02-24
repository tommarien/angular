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
        .provider('userService', userService);

    /*    function UserService($http) {
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
     }*/

    function userService() {

        var logName;

        this.init = function (logname) {
            console.log(logname);
            logName = logname;
        };

        this.$get = function ($log, $http) {
            function getUsers(page, pageSize) {
                $log.debug(`${logName} get users`);

                return $http.get(`api/users?page=${page}&pageSize=${pageSize}`)
                    .then(function (response) {
                        return response.data;
                    })
            }

            function getUser(id) {
                return $http.get(`api/users/${id}`)
                    .then(function (response) {
                        return response.data;
                    })
            }

            function put(user) {
                return $http.put(`api/users/${user.id}`, user)
                    .then(function (response) {
                        return response.data;
                    })
            }

            function post(user) {
                return $http.post(`api/users`, user)
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
                getUser: getUser,
                remove: remove,
                post: post,
                put: put
            }
        };

    }

})();
