(function () {
    'use strict';

    angular
        .module('myApp.controllers')
        .controller('UserEditController', UserEditController);

    function UserEditController(userService, $stateParams, $state) {
        var vm = this;
        var id = $stateParams.id;

        vm.user = {};
        vm.message = 'User edit mode';

        vm.Save = Save;

        initialize();

        function initialize() {
            if (id) {
                userService.getUser(id)
                    .then(function (user) {
                        vm.user = user;
                    })
            }
        }

        function Save(valid) {
            if (!valid) return;

            if (id) {
                userService.put(vm.user)
                    .then(function (user) {
                        vm.user = user;
                    });
            }
            else {
                userService.post(vm.user)
                    .then(function (user) {
                        $state.go('view2', {id: user.id});
                    });
            }
        }
    }

})();
