angular.module("app")
    .service("mainSvc", function($http, $q) {

        this.getData = function(lat, long) {
            return $http({
                method:"GET",
                url:"https://api.forecast.io/forecast/c59a5daab4fa8b0faedb9318e9cb8e14/" + lat + "," + long
                //https://api.forecast.io/forecast/c59a5daab4fa8b0faedb9318e9cb8e14/37.8267,-122.423
            }).then(function(response) {
                console.log(response.data);
                return response.data.currently;
            });
        };





        var data = [
            {zip: "84001", city: "Altamont", state: "UT", latitude: "40.395531",  longitude: "-110.27969"},
            {zip: "84002", city: "Altonah", state: "UT", latitude: "40.45679", longitude: "-110.32673"},
            {zip: "84003", city: "American Fork", state: "UT", latitude: "40.394235", longitude: "-111.79449"},
            {zip: "84004", city: "Alpine", state: "UT", latitude: "40.465161", longitude: "-111.76279"},
            {zip: "84010", city: "Bountiful", state: "UT", latitude: "40.876312", longitude: "-111.87249"},
            {zip: "84014", city: "Centerville", state: "UT", latitude: "40.927244", longitude: "-111.87682"},
            {zip: "84015", city: "Clearfield", state: "UT", latitude: "41.126476", longitude: "-112.04427"},
            {zip: "84020", city: "Draper", state: "UT", latitude: "40.514843", longitude: "-111.87294"},
            {zip: "84025", city: "Farmington", state: "UT", latitude: "40.988347", longitude: "-111.88847"},
            {zip: "84037", city: "Kaysville", state: "UT", latitude: "41.032893", longitude: "-111.93004"},
            {zip: "84408", city: "Ogden", state: "UT", latitude: "41.195593", longitude: "-111.948474"},
            {zip: "84532", city: "Moab", state: "UT", latitude: "38.572778", longitude: "-109.49392"},
            {zip: "84533", city: "Lake Powell", state: "UT", latitude: "37.655431", longitude: "-110.03772"},
            {zip: "84606", city: "Provo", state: "UT", latitude: "40.226302", longitude: "-111.64439"},
            {zip: "84651", city: "Payson", state: "UT", latitude: "40.025007", longitude: "-111.72117"},
            {zip: "84660", city: "Spanish Fork", state: "UT", latitude: "40.10637", longitude: "-111.65408"},
            {zip: "84662", city: "Spring City", state: "UT", latitude: "39.461825", longitude: "-111.47818"},
            {zip: "84663", city: "Springville", state: "UT", latitude: "40.168205", longitude: "-111.59577"},
            {zip: "84664", city: "Mapleton", state: "UT", latitude: "40.123394", longitude: "-111.56665"},
            {zip: "84665", city: "Sterling", state: "UT", latitude: "39.133489", longitude: "-111.74085"},
            {zip: "84667", city: "Wales", state: "UT", latitude: "39.458682", longitude: "-111.67126"},
            {zip: "84701", city: "Richfield", state: "UT", latitude: "38.765929", longitude: "-112.08397"},
            {zip: "84713", city: "Beaver", state: "UT", latitude: "38.35906", longitude: "-112.6926"},
            {zip: "84717", city: "Bryce Canyon", state: "UT", latitude: "37.6153", longitude: "-112.17088"},
            {zip: "84720", city: "Cedar City", state: "UT", latitude: "37.75164", longitude: "-113.16557"},
            {zip: "84790", city: "Saint George", state: "UT", latitude: "37.075039", longitude: "-113.55568"},
            {zip: "84821", city: "Logan", state: "UT", latitude: "41.717612", longitude: "-111.868898"}
    ];

        this.getByCity = function(city) {
            var dfd = $q.defer();
            console.log(city);
            for (var i = 0; i < data.length; i++) {
                if (data[i].city === city) {
                    city = data[i];
                }
            }
            $http({
                method: "GET",
                url: "https://api.forecast.io/forecast/c59a5daab4fa8b0faedb9318e9cb8e14/" + city.latitude + "," + city.longitude
            }).then(function(response) {
                var parsedResponse = response.data.currently;
                parsedResponse.zip = city.zip;
                parsedResponse.city = city.city;
                parsedResponse.state = city.state;
                parsedResponse.zip = city.zip;
                console.log(parsedResponse);
                dfd.resolve(parsedResponse);
            });
            return dfd.promise;
        };
        //{zip: "84001", city: "Altamont", state: "UT", latitude: "40.395531",  longitude: "-110.27969"},
});
