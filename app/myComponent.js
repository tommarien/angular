(function () {
    'use strict';

    angular.module('myApp')
        .component('myComponent', {
            template: `
            <div>
                <span>{{$ctrl.message}}</span>
            </div>
            `,
            bindings: {
                //message: '@'  //string binding
                message: '<'    //one way binding
                //message: '='    //two  way binding (DO NOT USE)
            },
            controller: function () {
                var ctrl = this;

                console.log(ctrl.message);

                ctrl.message = 'Hello from Shizzle overruled';
            }
        });

})();