(function () {

    angular.module('myApp')
        .filter('upper', function () {
            return function (value) {
                return !value ? value : value.toUpperCase();
            };
        });

})();