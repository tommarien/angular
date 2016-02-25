(function() {

    angular
        .module('myApp')
        .controller('UserListController', UserListController);

    function UserListController(userService, UserModel) {
        var page = 0;
        var pageSize = 10;
        var vm = this;

        // scope
        vm.gridView = false;
        vm.users = [];

        // scope methods
        vm.onSwitchView = onSwitchView;
        vm.onLoadMore = onLoadMore;
        vm.onDelete = onDelete;

        activate();

        ////////////

        function activate() {
            return UserModel.queryPaged(page, pageSize)
                            .then(function(users) {
                                vm.users = users;
                            })
        }

        function onSwitchView() {
            vm.gridView = !vm.gridView;
            page = 0;
            pageSize = (vm.gridView) ? 4 : 10;
            activate();
        }

        function onLoadMore() {
            page++;
            return UserModel.queryPaged(page, pageSize)
                            .then(function(users) {
                                vm.users = vm.users.concat(users);
                            })
        }

        function onDelete(user) {
            user.$destroy();
        }
    }

})();
