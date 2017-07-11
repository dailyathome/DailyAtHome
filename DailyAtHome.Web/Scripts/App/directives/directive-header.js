dahApp.directive('header', ['CONFIG', '$http', function (CONFIG, $http) {
    function linkedFunction($scope, element, attributes) {
        $http.get(CONFIG.API_URL + '/api/header/getcategories'
         ).then(function (response) {
             $scope.Categories = response.data;
         });
    }
    return {
        link: linkedFunction,
        restrict: 'A',
        transclude: true,
        templateUrl: 'Views/Shared/header.html',
    }
}]);