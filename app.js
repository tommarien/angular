(function () {
    "use strict";

    angular.module('myApp', [])
        .controller('MyController', MyController);

    function MyController($scope) {
        $scope.qty = 10;
        $scope.cost = 2;
        $scope.customers = [
            {name: 'Euricom', city: 'Mechelen'},
            {name: 'Apple', city: 'Cupertino'},
        ];

        $scope.onClick = function () {
            console.log('clicked');
            $scope.customers.push($scope.customer);
        };
    };

})();