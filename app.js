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
            {name: 'Bank Delen', city: 'Antwerpen'},
        ];

        $scope.imageName = 'logo';
        $scope.showImage = 'true';

        $scope.onClick = function () {
            console.log('clicked');
            $scope.customers.push($scope.customer);
        };

        $scope.toggleImage = function () {
            $scope.showImage = !$scope.showImage;
        };
    };

})();