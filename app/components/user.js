
(function() {

    angular.module('myApp')
        .component('user', {
            template: `
                <div class="panel panel-primary">
                    <div class="panel-body">
                        <img class="gridImg" ng-src="{{$ctrl.user.image}}">
                        <h2>{{$ctrl.user.name}}</h2>
                        <p>Age: {{$ctrl.user.age}}</p>
                        <p>Email: {{$ctrl.user.email}}</p>
                        <p>Address: {{$ctrl.user.address}} - {{$ctrl.user.zip}} {{$ctrl.user.city}}</p>
                    </div>
                </div>
            `,
            bindings: {
                user: '<'
            },
            controller: function() {
            }
        })

})()
