(function () {
    'use strict';

    angular
        .module('myApp', [
            'ui.bootstrap',
            'toaster',
            'myApp.controllers',
            'myApp.services'
        ])
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('httpInterceptor');
        })
        .config(function (userServiceProvider) {
            userServiceProvider.init('My logname');
        });

})();
