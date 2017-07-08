dahApp.registerCtrl('ProductsController', function ($scope, $http, CONFIG) {
    angular.element(document).ready(function () {
        $scope.ID = location.href.indexOf('ID=') > 0 ? location.href.split('ID=')[1] : 0;

        $http({
            url: CONFIG.API_URL + '/api/Header/GetProductsBySubCategory',
            method: "GET",
            params: { ID: $scope.ID }
        }).then(function success(response) {
            $scope.products = response.data;
        });
    });
});