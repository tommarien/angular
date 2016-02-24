(function () {
    'use strict';

    angular.module('myApp')
        .component('userGridComponent', {
            template: `
            <table class="table-hover table-striped">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip</th>
                    <th></th>
                <tr>
                </thead>
                <tbody>
                <tr ng-repeat="user in $ctrl.data | sort:'name'"> <!--| orderBy : 'name'-->
                    {{user}}
                    <td><img class="rowImg" ng-src="{{user.image}}"></td>
                    <td>{{::user.name}}</td> <!-- :: unsubscribes watches ofter 1 bind -->
                    <td>{{::user.email}}</td>
                    <td>{{::user.address}}</td>
                    <td>{{::user.city}}</td>
                    <td>{{::user.zip}}</td>
                    <td>
                    <a href="" ng-click="$ctrl.onDelete(user)">Delete</a>
                    <a ui-sref="view2({id:user.id})">Edit</a>
                    </td>
                <tr>
                </tbody>
            </table>
            `,
            bindings: {
                data: '<',
                onRemove: '&'
            },
            controller: function () {
                var ctrl = this;

                ctrl.onDelete = onDelete;

                function onDelete(user) {
                    ctrl.onRemove({user: user});
                }
            }
        });

})();