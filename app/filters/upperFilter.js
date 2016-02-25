(function () {

    angular
        .module('myApp')
        .filter('upper', function () {
            return function (input) {
                if (!input || !angular.isString(input))
                    return input;

                return input.toUpperCase();
            };
        })
        .filter('sortBy', function () {
            return function (input) {
                return _.sortBy(input, function (item) {
                    return item.name
                });
            };
        });
})();
