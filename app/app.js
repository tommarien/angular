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
                    controller: 'UserListController as vm'
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
        });

})();
