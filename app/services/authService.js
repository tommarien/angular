(function() {

    angular
        .module('myApp')
        .service('authService', authService);

    function authService($http, $window, $rootScope) {

        // login a user with email/password
        this.login = function(email, password) {
            var resource = {
                email: email,
                password: password
            };

            $http.post('api/auth/login', resource)
                 .then(function(response) {
                    var accessToken = response.data.accessToken;
                    $window.sessionStorage.setItem("token", accessToken);

                    // parse token to get claims
                    var claims = angular.fromJson($window.atob(accessToken.split('.')[1]));

                    // set identity
                    $rootScope.identity = {
                        name: claims.name,
                        userId: claims.sub,
                        role: claims.role
                    };

                    // fire event
                    $rootScope.$emit('userLoggedIn', identity);

                    // and return as promise result
                    return $rootScope.identity;
                 })
        };

        // logout a user
        this.logout = function() {
            var identity = $rootScope.identity;

            // remove token from storage
            $window.sessionStorage.removeItem("token");

            // set anonymous identity
            $rootScope.identity = {};

            // log and notity to others
            $rootScope.$emit('userLoggedOut', identity);
        };

        // set identity on startup
        this.init = function() {

            // init to anomyous
            $rootScope.identity = {};

            // load token
            var token = $window.sessionStorage.getItem('token');

            // if token exist
            if (token != null) {
                // get claims from token and recreate identity
                var claims = angular.fromJson($window.atob(token.split('.')[1]));
                $rootScope.identity = {
                    name: claims.name,
                    userId: claims.sub,
                    role: claims.role
                };
            }

            return $rootScope.identity
        }
    }
})();
