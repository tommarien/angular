(function () {
    'use strict';

    angular
        .module('myApp.controllers')
        .controller('UserEditController', UserEditController);

    UserEditController.$inject = ['$scope', '$stateParams', '$state', 'UserModel'];
    function UserEditController($scope, $stateParams, $state, UserModel) {
        var vm = this;
        var id = $stateParams.id;

        vm.user = {};
        vm.message = 'User edit mode';

        // Watch something manual prevent if possible
        $scope.$watch('vm.user.name', function (newValue, oldValue) {
            if (newValue === oldValue) return;
            console.log(oldValue, newValue);
        });

        vm.Save = Save;

        initialize();

        function initialize() {
            if (id) {
                UserModel.get(id)
                    .then(function (user) {
                        vm.user = user;
                    });
                return;
            }

            vm.user = new UserModel();
        }

        function Save(valid) {
            if (!valid) return;

            vm.user.$save()
                .then(function (user) {
                    $state.go('view2', {id: user.id});
                });
        }
    }

})();
