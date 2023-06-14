angular.module('myApp', [])
  .controller('bienvenida', function($scope) {
    const mensaje = 'Hola Mundo Angular';
    $scope.saludo = mensaje;
  });