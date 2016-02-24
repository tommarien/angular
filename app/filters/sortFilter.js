(function () {

    angular.module('myApp')
        .filter('sort', function () {
            return function (value, column) {
                console.log('entered');
                if (!value || !_.isArray(value)) return value;
                return _.sortBy(value, column);
            };
        });
})();