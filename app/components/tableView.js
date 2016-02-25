(function() {

    angular.module('myApp')
        .component('tableView', {
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
                        <tr ng-repeat="user in $ctrl.users">
                            {{user}}
                            <td><img class="rowImg" ng-src="{{::user.image}}"></td>
                            <td>{{::user.name}}</th>
                            <td>{{::user.email}}</th>
                            <td>{{::user.address}}</th>
                            <td>{{::user.city}}</th>
                            <td>{{::user.zip}}</th>
                            <td>
                                <a href="" ng-click="$ctrl.onRemove({ user: user })">delete</a>
                                <a ui-sref="edit({id: user.id})"> edit</a>
                            <td>
                        <tr>
                    </tbody>
                </table>
            `,
            bindings: {
                users: '<',
                onRemove: '&'
            }
        })

})()
