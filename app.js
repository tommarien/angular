(function () {
    "use strict";

    angular.module('myApp', [])
        .controller('MyController', MyController);

    function MyController($scope, myService) {
        $scope.qty = 10;
        $scope.cost = 2;

        myService.getCustomers()
            .then(function (customers) {
                $scope.customers = customers;
            })
            .catch(function(err){
                console.log(err);
            });

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