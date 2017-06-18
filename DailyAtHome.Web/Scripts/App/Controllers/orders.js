dahApp.registerCtrl('ordersController', function ($scope, $http) {

    $scope.data = [];
    angular.element(document).ready(function () {
        $http.get(
            'http://localhost:56259/api/Values',
        { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') } }
 ).then(function successCallback(response) {
     $scope.data = angular.copy(response.data);
 },
 function errorCallback(jqXHR) {
     if (jqXHR.status == 401) {
         window.location.href = '/login';
     }
     console.log(jqXHR);
 })
    });
});