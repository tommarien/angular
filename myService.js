(function () {

    angular.module('myApp')
        .factory('myService', myService);

    function myService($http) {
/*        var customers = [
            {name: 'Euricom', city: 'Mechelen'},
            {name: 'Apple', city: 'Cupertino'},
            {name: 'Bank Delen', city: 'Antwerpen'},
        ];*/

        function getCustomers() {
            return $http.get('customers.json')
                .then(function(response){
                    return response.data;
                });
        };

        return {
            getCustomers: getCustomers
        };
    };

})();