(function () {

    angular.module('myApp')
        .filter('sort', function () {
            return function (value, column) {
                if (!value || !_.isArray(value)) return value;
                return _.sortBy(value, column);
            };
        });
})();