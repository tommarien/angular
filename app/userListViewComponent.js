(function(){
    angular.module('myApp')
        .component('userListViewComponent', {
            template: `
            <div ng-repeat="user in $ctrl.data" class="col-sm-6">
                <user-detail-component data="user"></user-detail-component>
            </div>
            `,
            bindings: {
                data:'<'
            },
            controller: function () {
                var ctrl = this;
            }
        });

})();