/**
 * Created by tommarien on 22/02/16.
 */
(function () {
    "use strict";

    angular.module('myApp', ['infinite-scroll'])
        .controller('UserController', UserController);

    angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 250);

    function UserController($scope, userService) {

        $scope.viewMode = 'list';
        initializeMode($scope.viewMode);

        $scope.switchListMode = function () {
            $scope.viewMode = $scope.viewMode === 'list' ? 'detail' : 'list';

            initializeMode($scope.viewMode);
        };

        $scope.showMore = function () {
            $scope.page = $scope.page + 1;
            userService.getAll($scope.page, $scope.pageSize)
                .then(function (users) {
                    if (!users || users.length < $scope.pageSize)
                    {
                        $scope.scrollDisabled = true;
                    }
                    $scope.users = $scope.users.concat(users);
                })
                .catch(function (err) {
                    console.log(err);
                });
        };

        function initializeMode(mode) {
            $scope.scrollDisabled = false;

            $scope.page = 0;
            $scope.pageSize = $scope.viewMode === 'detail' ? 8 : 20;

            userService.getAll($scope.page, $scope.pageSize)
                .then(function (users) {
                    $scope.users = users;
                })
                .catch(function (err) {
                    $scope.users = null;
                    console.log(err);
                });
        }
    };

})();
