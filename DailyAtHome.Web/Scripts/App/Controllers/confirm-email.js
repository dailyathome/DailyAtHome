dahApp.registerCtrl('ConfirmEmailController', function ($scope, $http, CONFIG) {
    $scope.confirmEmailSuccess = false;
    angular.element(document).ready(function () {
        $scope.email = location.href.indexOf('userId') > 0 ? decodeURIComponent(location.href.split('&')[0].split('userId=')[1]) : '';
        $scope.token = location.href.indexOf('token') > 0 ? decodeURIComponent(location.href.split('&')[1].split('token=')[1]) : '';
        $http.post(CONFIG.API_URL + '/api/account/ConfirmEmail', { email:$scope.email, token: $scope.token }).then(function (response) {
            $scope.confirmEmailSuccess = true;
        });
    });
});