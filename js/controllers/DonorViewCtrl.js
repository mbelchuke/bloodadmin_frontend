angular.module("DonorApp").controller("DonorViewCtrl",
    function($http, $scope, $state, $stateParams) {

    	var donor_id = $stateParams.donor_id;

    	$scope.state = $state.current
    	$scope.params = $stateParams; 

    	$http.get('http://bloodadmin.cloudapp.net/api/donors/' + donor_id)
            .success(function(response){
                $scope.donors = response;
            }
        );

    }
);