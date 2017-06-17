dahApp.controller('ordersController', function ($scope, $http) {

    $scope.data = [];
    angular.element(document).ready(function () {
        $http.get(
            'http://localhost:56259/api/Values',
        { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') } }
 ).then(function (response) {    
     $scope.data = angular.copy(response.data);
 });
    });
});

$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:56259/api/Values',
        method: 'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
        },
        success: function (data) {
            console.log(data);
        }
    });
});