(function () {
    "use strict";

    angular.module('myApp')
        .factory('userService', userService);

    function userService($http) {
        function getAll(page, pageSize) {
            return $http.get('/api/users?page=' + page + '&pageSize=' + pageSize)
                .then(function (response) {
                    return response.data;
                })
        }

        return {
            getAll: getAll
        };
    }

})();