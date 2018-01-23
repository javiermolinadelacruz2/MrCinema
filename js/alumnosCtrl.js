app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	$scope.alumnos  = {};
	$scope.posicion = 5;

	console.log("llegamos a alumnosCtrl");
	$http.get('php/servicios/alumnos.listado.php').success(function(data){
		//console.log(data);
		//console.log("llegamos al get");
		$scope.alumnos = data;
		alert($scope.alumnos);
	});

	$scope.siguientes = function(){

		if ( $scope.alumnos.length > $scope.posicion  ) {
			$scope.posicion += 5;
		};

	}

	$scope.anteriores = function(){

		if ( $scope.posicion > 5 ) {
			$scope.posicion -= 5;
		};

	}


}]);