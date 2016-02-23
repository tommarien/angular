(function(){
    angular.module('myApp')
        .component('userDetailComponent', {
            template: `
                <div class="panel panel-primary">
                    <div class="panel-body">
                        <img class="gridImg" ng-src="{{$ctrl.data.image}}">
                        <h2>{{$ctrl.data.name}}</h2>
                        <p>Age: {{$ctrl.data.age}}</p>
                        <p>Email: {{$ctrl.data.email}}</p>
                        <p>Address: {{$ctrl.data.address}} - {{$ctrl.data.zip}} {{$ctrl.data.city}}</p>
                    </div>
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