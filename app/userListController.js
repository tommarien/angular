(function() {

    angular
        .module('myApp')
        .controller('UserListController', UserListController);

    function UserListController($scope, userService) {
        var page = 0;
        var pageSize = 10;
        // scope
        $scope.gridView = false;
        $scope.buttonText = 'grid';
        $scope.onSwitchView = onSwitchView;
        $scope.onLoadMore = onLoadMore;
        $scope.users = [];

        activate();

        function activate() {
            return userService.getUsers(page, pageSize)
                .then(function(users) {
                    $scope.users = users;
                })
        }

        function onSwitchView() {
            $scope.gridView = !$scope.gridView;
            page = 0;
            pageSize = ($scope.gridView) ? 4 : 10;
            activate();
        }

        function onLoadMore() {
            console.log('loadMode');
            page++;
            return userService.getUsers(page, pageSize)
                .then(function(users) {
                    $scope.users = $scope.users.concat(users);
                })
        }
    }

})();
