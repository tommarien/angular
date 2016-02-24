(function () {
    'use strict';

    angular
        .module('myApp', [
            'ui.bootstrap',
            'toaster',
            'ui.router',
            'myApp.controllers',
            'myApp.services'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('view1');

            $stateProvider
                .state('view1', {
                    url: '/view1',
                    templateUrl: 'views/main.html',
                    controller: 'UserListController as vm',
                    resolve: {
                        users: function(userService){
                            return userService.getUsers(0,10);
                        }
                    }
                })
                .state('view2', {
                    url: '/view2/:id?',
                    templateUrl: 'views/edit.html',
                    controller: 'UserEditController as vm'
                });

        })
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('httpInterceptor');
        })
        .config(function (userServiceProvider) {
            userServiceProvider.init('My logname');
        })
        .run(function ($rootScope, $log) {
            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams, options) {
                    $log.info('State Changed from:', fromState, 'to:', toState);
                });

            $rootScope.$on('$stateChangeError',
                function (event, toState, toParams, fromState, fromParams, error) {
                    $log.error('State Error from:', fromState, 'to:', toState);
                });

        });

})();
