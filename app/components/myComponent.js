(function() {

    angular.module('myApp')
        .component('myComponent', {
            template: `
                <div>
                    <h1>Hello my component: {{$ctrl.message2}}</h1>
                    <button ng-click="$ctrl.onClick()">click me</button>
                    <ng-transclude>
                        This is a default text
                    </ng-transclude>
                </div>
            `,
            transclude: true,
            bindings: {
                message:  '@',   // string binding
                message2: '<',   // one way binding (ALWAYS USE THIS)
                notify:   '&',   // function binding
            },
            controller: function() {
                var ctrl = this;
                console.log(ctrl.message2);

                ctrl.onClick = function() {
                    console.log('onClick');
                    ctrl.notify({arg: 123, arg1: 'test'});
                }
            }
        })

})()
