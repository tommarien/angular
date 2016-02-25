(function() {

    angular
        .module('myApp', [
            'toaster',
            'ui.router',
            'ngMessages',
            'modelFactory'
        ])
        .constant('config', {
            urlBase: 'http://localhost:3000/api',
            timeout: 1000
        })
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

            // Uncomment line below to enable html mode (remove '#' in url)
            // $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise("list");

            $stateProvider
                .state('list', {
                    url: '/list',
                    templateUrl: '/views/listView.html',
                    controller: 'UserListController as vm',
                    access: 'user'
                })
                .state('edit', {
                    url: '/edit/:id?',
                    templateUrl: '/views/editView.html',
                    controller: 'UserEditController as vm',
                    access: 'admin'
                })

        })
        .run(function($rootScope, $state) {
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
                //console.log('route start: ', toState, fromState);
            });

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                //console.log('route success: ', toState, fromState);
            })

            $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
                console.log('route failure: ', error);
            })
        })
})();

