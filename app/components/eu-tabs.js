(function () {

    angular.module('myApp')
        .component('euTabs', {
            transclude: true,
            template: `
              <div class="tabbable">
                <ul class="nav nav-tabs">
                    <li ng-repeat="pane in $ctrl.panes" ng-class="{ 'active' : pane.active }">
                        <a ng-click="$ctrl.activatePane(pane)" href="">{{pane.title}}</a>
                    </li>
                </ul>
                <div ng-transclude></div>
            </div>
            `,
            bindings: {},
            controller: function () {
                this.panes = [];

                this.addPane = function (pane) {
                    this.panes.push(pane);

                    if (this.panes.length === 1) pane.active = true;
                };

                this.activatePane = function (pane) {
                    _.forEach(this.panes, function (pane) {
                        pane.active = false;
                    });

                    pane.active = true;
                }
            }
        })
        .component('euPane', {
            transclude: 'true',
            require: {
                tabCtrl: '^euTabs'
            },
            template: `
              <div ng-if="$ctrl.active" class="tab-content" ng-transclude>
              </div>
            `,
            bindings: {
                title: '@'
            },
            controller: function () {
                this.active = false;

                this.$onInit = function () {
                    this.tabCtrl.addPane(this);
                };
            }
        });

})();
