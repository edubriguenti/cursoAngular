(function () {
    'use strict';

    angular.module('app', ['ngRoute']);

    angular
        .module('app')
        .config(configRoute);

    configRoute.$inject = ['$routeProvider', '$locationProvider'];

    function configRoute($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'src/views/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .when('/jobs/:id', {
                templateUrl: 'src/views/job-description.html',
                controller: 'jobsController',
                controllerAs: 'vm'

            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();