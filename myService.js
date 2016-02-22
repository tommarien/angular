(function () {

    angular.module('myApp')
        .factory('myService', myService);

    function myService() {
        var customers = [
            {name: 'Euricom', city: 'Mechelen'},
            {name: 'Apple', city: 'Cupertino'},
            {name: 'Bank Delen', city: 'Antwerpen'},
        ];

        function getCustomers() {
            return customers;
        };

        return {
            getCustomers: getCustomers
        };
    };

})();