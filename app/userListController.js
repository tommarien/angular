(function () {

    angular
        .module('myApp')
        .controller('UserListController', UserListController);

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

            userService.deleteUser(user.id)
                .then(function () {
                    $scope.users = $scope.users.filter(item => item !== user);
                })
        }
    }

})();
