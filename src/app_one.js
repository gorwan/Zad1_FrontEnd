﻿AppOne = angular.module('AppOne', []);
// rejestrujemy aplikacje pod nazwa  ``AppOne``

AppOne.controller('NameController', ['$scope', function($scope){
$scope.name = 'Piotr';
}]);

AppOne.directive('ptrngName',function(){
return {
    restrict: 'E',
    template: 'Your name is {{name}}'
  };
});
