(function () {
    'use strict';

    angular
        .module('myApp.controllers')
        .controller('UserEditController', UserEditController);

    function UserEditController(userService, $stateParams) {
        var vm = this;

        vm.user = {};
        vm.message = 'User edit mode';

        initialize();

        function initialize() {
            var id = $stateParams.id;
            if (id) {
                userService.getUser(id)
                    .then(function (user) {
                        vm.user = user;
                    })
            }
        }
    }

})();
