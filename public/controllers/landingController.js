myapp.controller('landingController', function($scope, $location) {

    console.log('in landingController');

    $scope.fbLogin = function() {
        console.log($scope.appID)
        window.fbAsyncInit = function() {
            FB.init({
                appId: $scope.appID,
                cookie: true,
                xfbml: true,
                version: 'v2.3'
            });

            FB.login(function() {
                console.log($location)
                $location.path('pages');
                $scope.$apply();
            });
        }();
    }

});