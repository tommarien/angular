(function () {
    angular.module('myApp')
        .factory('httpInterceptor', httpInterceptor);

    function httpInterceptor($q, toaster) {
        return {
            request: function (request) {
                request.headers['x-Auth'] = '12345';
                return request;
            },
            responseError: function (response) {
                console.log(response);
                toaster.pop('error', `HTTP 1.1 ${response.status} ${response.statusText}`, `${response.config.method} ${response.config.url}`);
                return $q.reject(response);
            }
        }
    }

})();