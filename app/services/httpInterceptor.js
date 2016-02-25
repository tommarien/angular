(function() {

    angular
        .module('myApp')
        .factory('httpInterceptor', httpInterceptor)
        .config(function($httpProvider) {
            $httpProvider.interceptors.push('httpInterceptor');
        });

    function httpInterceptor($q, toaster) {
        return {
            request: function(request) {
                console.log(request.url);
                request.headers.XAuthorization = 'basic 12345';
                return request;
            },
            responseError: function(response) {
                console.log(response);
                toaster.pop('error', "notification", "Huston, we have a problem - " + response.statusText);
                return $q.reject(response);
            }
        }
    }

})();
