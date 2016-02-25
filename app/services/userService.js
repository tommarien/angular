(function () {

    angular
        .module('myApp')
        .service('userService', userService);

    function userService($http) {

        this.getUsers = function (page, pageSize) {
            return $http.get('api/users?page=' + page + '&pageSize=' + pageSize)
                .then(function (response) {
                    return response.data;
                })
        };

        this.remove = function (user) {
            return $http.delete('api/users/' + user.id)
                .then(function (response) {
                    return response.data;
                });
        };

        this.getById = function (id) {
            return $http.get('api/users/id')
                .then(function (response) {
                    return response.data;
                });
        };

        this.save = function (user) {
            if (user.id) {
                return $http.put('api/users/' + user.id, user)
                    .then(function (response) {
                        return response.data;
                    });
            }
            else {
                return $http.post('api/users', user)
                    .then(function (response) {
                        return response.data;
                    });
            }
        };
    }

})();
