angular.module("app")
    .controller("mainCtrl", function($scope, mainSvc) {


        $scope.sunny = false;
        $scope.cloudy = false;
        $scope.getWeather = function(latitude, longitude) {
            mainSvc.getData($scope.latitude, $scope.longitude)
                .then(function(weather) {
                    $scope.weather = weather;
                    if (weather.icon === "partly-cloudy-night" || weather.icon === "Overcast" ) {
                        $scope.cloudy = true;
                    } else if (weather.icon === "clear-day") {
                        $scope.sunny = true;
                    }
                });
        };

        $scope.getByCity = function() {
            mainSvc.getByCity($scope.city)
                .then(function(weather) {
                    $scope.weather = weather;
                });
        };



});
