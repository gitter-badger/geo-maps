angular.module('geomaps', [])

.factory('DataFactory', function() {
	/* Replace this with an AJAX Request later */
	var maps = ['East Asia', 'Oceania', 'Russia', 'Europe', 'South Asia', 'Southeast Asia'];
	maps.sort();
	return {maps: maps};
})

.controller('NavCtrl', function($scope, DataFactory) {
	$scope.maps = DataFactory.maps;
})

.controller('FrontPageCtrl', function($scope, DataFactory) {
	$scope.maps = DataFactory.maps;
})
