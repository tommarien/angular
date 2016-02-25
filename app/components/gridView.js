(function() {

    angular.module('myApp')
        .component('gridView', {
            template: `
                <div ng-repeat="user in $ctrl.users" class="col-sm-6">
                    <user user="user"></user>
                </div>
            `,
            transclude: true,
            bindings: {
                users: '<'
            },
            controller: function() {
            }
        })

})()
