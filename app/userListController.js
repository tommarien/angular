(function () {
    'use strict';

    angular
        .module('myApp.controllers', [])
        .controller('UserListController', UserListController)
        .controller('AlertController', AlertController);

    function AlertController($scope) {
        $scope.alert = null;

        $scope.onAddAlert = onAddAlert;
        $scope.onCloseAlert = onCloseAlert;

        function onAddAlert(){
            $scope.alert = {
                msg: "Boeh",
                type: "warning"
            }
        }

        function onCloseAlert(){
            $scope.alert = null;
        }
    }

    function UserListController($scope, userService) {
        var page = 0;
        var pageSize = 10;

        // scope
        $scope.gridView = false;
        $scope.users = [];

        $scope.onSwitchView = onSwitchView;
        $scope.onLoadMore = onLoadMore;
        $scope.onDelete = onDelete;

        initialize();

        function initialize() {
            return userService.getUsers(page, pageSize)
                .then(function (users) {
                    $scope.users = users;
                })
        }

        function onSwitchView() {
            $scope.gridView = !$scope.gridView;
            page = 0;
            pageSize = ($scope.gridView) ? 4 : 10;
            initialize();
        }

        function onLoadMore() {
            console.log('loadMode');
            page++;
            return userService.getUsers(page, pageSize)
                .then(function (users) {
                    $scope.users = $scope.users.concat(users);
                })
        }

        function onDelete(user) {
            console.log('delete', user);

            userService.remove(user.id)
                .then(function (resource) {
                    $scope.users = $scope.users.filter(item => item !== user);
                })
        }
    }

})();
