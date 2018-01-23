'use strict';
app.controller('trendCtrl', function ($scope, $http) {

    $scope.setActive("mTrend");
    
    $scope.$watch('search', function () {
        fetch();
    });

    var urlMoviedb = "https://api.themoviedb.org/3";
    var apiKey = "4293cdd4be6daa38f0b309d4539c0680";
    var path = urlMoviedb + "/discover/movie?sort_by=popularity.desc&api_key=" + apiKey + "&language=es";
    $scope.urlMoviedbIMG = "http://image.tmdb.org/t/p/w500";


    function fetch() {
        $http.get(path)
            .then(function (response) {
                $scope.details = response.data.results;
                //console.log($scope.details);

            });
    }

    $scope.update = function (movie) {
        $scope.search = movie.Title;
    };

    $scope.select = function () {
        this.setSelectionRange(0, this.value.length);
    }
});