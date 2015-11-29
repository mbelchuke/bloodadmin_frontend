angular.module("DonorApp").controller("BlodCtrl",
    function($scope) {
        console.log("Hej fra BlodCtrl")

        $scope.blod = function(visit) {
            $state.go("blod",
                {testApp: visit});
        };


    });