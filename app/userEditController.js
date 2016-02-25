(function() {

    angular
        .module('myApp')
        .controller('UserEditController', UserEditController);

    function UserEditController($scope, userService, $stateParams, $state, UserModel) {
        var vm = this;

        // scope
        vm.user = {};

        // scope methods
        vm.submit = submit;

        activate();

        ////

        function activate() {

            // new user ?
            if (!$stateParams.id) {
                vm.user = new UserModel();
                return;
            }

            // get existing user
            UserModel.get($stateParams.id)
                     .then(function(user) {
                         vm.user = user;
                     })
        }

        function submit(isValid) {

            // is the form invalid, just exit
            if (!isValid)
                return;

            // save the user
            vm.user.$save()
                   .then(function() {
                        // and go back to list
                        $state.go('list');
                   })
        }
    }

})();
