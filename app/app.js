(function () {
    'use strict';

    angular
        .module('myApp', [
            'ui.bootstrap',
            'myApp.controllers',
            'myApp.services'
        ])
        .config(function (userServiceProvider) {
            userServiceProvider.init('My logname');
        });

})();
