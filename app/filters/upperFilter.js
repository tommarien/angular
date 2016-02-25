(function() {

    angular
        .module('myApp')
        .filter('upper', function () {
            return function (input) {
                if (!input)
                    return input;

                return input.toUpperCase();
            };
        })
        .filter('sortBy', function () {
            return function (input) {

                console.log('sortBy:...')

                return _.sortBy(input, item => item.name);
            };
        });
})()
