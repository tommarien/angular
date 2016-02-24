(function () {
    'use strict';

    angular
        .module('myApp.controllers', [])
        .controller('UserListController', UserListController);
    /*        .controller('AlertController', AlertController)*/

    /*  function AlertController($scope) {
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
     }*/

    UserListController.$inject = ['userService', '$filter', 'users'];
    function UserListController(userService, $filter, users) {
        var vm = this;

        var page = 0;
        var pageSize = 10;

        // scope
        vm.gridView = false;
        vm.users = users;
        vm.message = '<b>Hello from controller</b>';

        vm.onSwitchView = onSwitchView;
        vm.onLoadMore = onLoadMore;
        vm.onDelete = onDelete;
        vm.onNotify = onNotify;

        initialize();

        function initialize() {

            /*  // Get filter in controller/component
             var upperFilter = $filter('upper');

             var sortFilter = $filter('sort');

             vm.message = upperFilter('Hello World');

             return userService.getUsers(page, pageSize)
             .then(function (users) {
             vm.users = users;
             })*/
        }

        function onSwitchView() {
            vm.gridView = !vm.gridView;
            page = 0;
            pageSize = (vm.gridView) ? 4 : 10;
            initialize();
        }

        function onLoadMore() {
            console.log('loadMode');
            page++;
            return userService.getUsers(page, pageSize)
                .then(function (users) {
                    vm.users = vm.users.concat(users);
                })
        }

        function onDelete(user) {
            userService.remove(user.id)
                .then(function (resource) {
                    vm.users = vm.users.filter(item => item !== user);
                })
        }

        function onNotify() {
            console.log('onNotify');
        }
    }

})();
