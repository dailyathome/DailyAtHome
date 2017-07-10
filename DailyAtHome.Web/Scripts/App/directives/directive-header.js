dahApp.directive('header', function () {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: 'Views/Shared/header.html',
        controller: 'HeaderController'
    }
});