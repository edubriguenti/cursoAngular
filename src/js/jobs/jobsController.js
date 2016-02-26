(function () {
    'use strict';

    angular.module('app').controller('jobsController', jobsController);

    jobsController.$inject = ['$http', '$routeParams'];

    function jobsController($http, $routeParams) {

        var vm = this;
        
        console.log($routeParams);

    }
})();