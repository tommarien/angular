(function () {
    'use strict';

    angular.module('myApp')
        .component('myComponent', {
            template: `
            <div>
                <span>{{$ctrl.message}}</span>
                <button ng-click="$ctrl.onClick()">Notify</button>
                <ng-transclude>
                </ng-transclude>
            </div>
            `,
            transclude:true,
            bindings: {
                //message: '@'  //string binding
                message: '<',    //one way binding
                //message: '='    //two  way binding (DO NOT USE)
                notify: '&',

            },
            controller: function () {
                var ctrl = this;

                ctrl.onClick = onClick;

                console.log(ctrl.message);

                ctrl.message = 'Hello from Shizzle overruled';

                function onClick() {
                    console.log('onClick');
                    ctrl.notify();
                }
            }
        });

})();