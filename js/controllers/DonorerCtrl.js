angular.module("DonorApp", ['ui.router', 'ngResource']).controller("DonorerCtrl",
    function($scope, $http, $resource, $stateParams, $state) {
        
        $http.get('http://bloodadmin.cloudapp.net/api/donors')
            .success(function(response){
                $scope.donors = response;
            }
        );

        $scope.newDonor = function () {
            $.ajax({
                type: 'POST',
                url: 'http://bloodadmin.cloudapp.net/api/donors',
                data: $('#saveDonor').serialize(),
                success: function (response) {
                    $state.go("donorer");
                }
            });
        };

        $scope.deleteDonor = function (id) {
            $http.delete('http://bloodadmin.cloudapp.net/api/donors/' + id)
                .success(function(data){
                    $scope.refresh();
                }
            );
        };

        $scope.refresh = function(){
            $http.get('http://bloodadmin.cloudapp.net/api/donors')
                .success(function(data){
                    $scope.donors = data;
                }
            );
        }

        var ageData =[];
            $scope.ageData = ageData;
        for(i = 18; i <= 65; i++){
            ageData.push(i);
        }



    });