(function(angular) {

    'use strict';

	var app = angular.module('ngResumeApp', []);

	app.controller('ResumeAppController',
	    ['$scope', 'staticDataService', function($scope, staticDataService) {

	    $scope.currentSection = 'home';
	    $scope.currentPortfolio = undefined;

	    $scope.getData = function(key) {
	    	
	    	return staticDataService.get(key);
	    };

	    $scope.calculateWidth = function(num) {

	    	var k = 29; //max number of votes, don't bother me it's a mvp :P

	    	var percent = (num/k)*100;

	    	return percent;
	    };

		$scope.setPortfolio = function(portfolio) {

			if ($scope.currentPortfolio) {
				$scope.currentPortfolio.closed = true;
			}

			portfolio.closed = !portfolio.closed;

			$scope.currentPortfolio = portfolio;
		};


	}]);

	app.directive('ngResumeRow', ['staticDataService', function(staticDataService) {

	return {
		restrict: 'E',
		scope: {
			item: '='
		}, //TemplateURL CAN'T BE USED, NOT ALLOWED ON STATIC SITES! ONLY FOR HTTP SERVERS
		template: '<div class="row item"><div class="twelve columns"><h3>{{item.name}}</h3><p class="info">{{item.role}} <span>&bull;</span> <em class="date">{{item.period}}</em></p><p>{{item.description}}</p></div></div>'
	 }

	}]);

})(window.angular);