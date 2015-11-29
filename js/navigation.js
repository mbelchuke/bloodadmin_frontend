angular.module("DonorApp").config(
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "partials/home.html",
            controller: "HomeCtrl"
        });

        $stateProvider.state("donorer", {
            url: "/donorer",
            templateUrl: "partials/donorer.html",
            controller: "DonorerCtrl"
        });

        $stateProvider.state("blod", {
            url: "/blod",
            templateUrl: "partials/blod.html",
            controller: "BlodCtrl"
        });

        $stateProvider.state("ny-donor", {
            url: "/ny-donor",
            templateUrl: "partials/ny-donor.html",
            controller: "DonorerCtrl"
        });

        $stateProvider.state("donorview", {
            url: "/donors/:donor_id",
            templateUrl: "partials/donorview.html",
            controller: "DonorViewCtrl"
        });

        $stateProvider.state("edit-donor", {
            url: "/donors/edit",
            templateUrl: "partials/edit-donor.html",
            controller: "DonorEditCtrl"
        });

    }
);
