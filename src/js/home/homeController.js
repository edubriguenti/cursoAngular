(function () {
    'use strict';

    angular.module('app').controller('homeController', homeController);

    homeController.$inject = ['$http'];

    function homeController($http) {

        var vm = this;
        vm.count = 0;


        $http.get('http://10.0.1.193:3000/api/jobs')
            .then(function (request) {
                console.log("->", request);
                vm.jobs = request.data.items;

                var id = request.data.items[0]._id;

                return $http.get('http://10.0.1.193:3000/api/jobs/' + id);


            })
            .then(function (request2) {

                console.log('Segunda Req:', request2);

            })
            .catch(function (err) {
                console.error(err);
            });

        vm.increment = function () {
            vm.count++;
        }
    }
})();