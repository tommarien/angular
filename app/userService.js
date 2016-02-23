(function () {

    angular
        .module('myApp')
        .factory('userService', userService);

    function userService($http) {

        function getUsers(page, pageSize) {
            return $http.get(`api/users?page=${page}&pageSize=${pageSize}`)
                .then(function (response) {
                    return response.data;
                })
        }

        function remove(id) {
            return $http.delete(`api/users/${id}`);
        }

        return {
            getUsers: getUsers,
            remove: remove
        }

    }

})();
