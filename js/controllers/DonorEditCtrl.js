angular.module("testApp", ['ui.router', 'ngResource']).controller("DonorEditCtrl",
    function($scope, $http, $resource, $stateParams, $state, $routeParams) {

        console.log("Test fra DonorEditCtrl");

        var donor_id = $routeParams.donor_id;

        $http.get('http://bloodadmin.cloudapp.net/api/donors' + donor_id)
            .success(function(data, status, headers, config) {
                $scope.donors = data;
                $scope.loading = false;
            }
        );

    });