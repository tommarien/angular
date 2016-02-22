/**
 * Created by tommarien on 22/02/16.
 */
(function () {
    "use strict";

    angular.module('myApp', [])
        .controller('UserController', UserController);

    function UserController($scope, userService) {

        $scope.viewMode = 'list';

        userService.getAll()
            .then(function (users) {
                $scope.users = users;
            })
            .catch(function (err) {
                console.log(err);
            });

        $scope.switchListMode = function () {
          $scope.viewMode = $scope.viewMode === 'list' ? 'detail' : 'list';
        };
    };

})();
