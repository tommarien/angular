(function () {
    "use strict";

    angular.module('myApp')
        .factory('userService', userService);

    function userService($http) {
        function getAll() {
            return $http.get('/api/users')
                .then(function (response) {
                    return response.data;
                })
        }

        return {
            getAll: getAll
        };
    }

})();