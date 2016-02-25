(function () {

    angular.module('myApp')
        .component('euButton', {
            transclude: true,
            template: ['$attrs', function ($attrs) {
                console.log($attrs);

                if ($attrs.href) {
                    return `
                    <a href="${$attrs.href}" class="btn btn-success" ng-transclude>

                    </a>
                    `;
                }
                else {
                    return `
                    <button ng-click="$ctrl.clicked()" type="button" class="btn btn-success" ng-transclude>
                    </button>
                    `;
                }
            }],
            bindings: {
                clicked: '&'
            }

        });

})();
