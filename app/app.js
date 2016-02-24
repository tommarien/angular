(function () {
    'use strict';

    angular
        .module('myApp', [
            'ui.bootstrap',
            'toaster',
            'ngRoute',
            'myApp.controllers',
            'myApp.services'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/view1', {
                    templateUrl: 'views/main.html',
                    controller: 'UserListController as vm'
                })
                .when('/view2', {
                    templateUrl: 'views/view2.html'
                })
                .otherwise({
                    redirectTo: '/view1'
                });

        })
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('httpInterceptor');
        })
        .config(function (userServiceProvider) {
            userServiceProvider.init('My logname');
        });

})();
