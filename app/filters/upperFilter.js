(function () {

    angular.module('myApp')
        .filter('upper', function () {
            return function (value, arg) {
                return !value ? value : value.toUpperCase();
            };
        });

})();