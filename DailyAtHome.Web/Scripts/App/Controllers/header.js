﻿dahApp.registerCtrl("HeaderController", function ($scope, $http, CONFIG) {

    $http.get(CONFIG.API_URL + ''
         ).then(function (response) {
        $scope.Categories = response.data;
    });
});