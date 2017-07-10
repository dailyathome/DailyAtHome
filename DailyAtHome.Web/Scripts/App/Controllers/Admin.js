dahApp.registerCtrl('AdminController', function ($scope, $http, CONFIG) {

    $http.get(CONFIG.API_URL + '/api/Header/GetCategories').then(function (response) {
        $scope.Categories = response.data;
    });

});