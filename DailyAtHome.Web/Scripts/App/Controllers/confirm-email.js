dahApp.registerCtrl('ConfirmEmailController', function ($scope, $http, CONFIG) {
    $scope.confirmEmailSuccess = false;
    $scope.confirmEmailFailed = false;
    $scope.confirmEmailErrorMsg = '';
    angular.element(document).ready(function () {
        $scope.email = location.href.indexOf('userId') > 0 ? decodeURIComponent(location.href.split('&')[0].split('userId=')[1]) : '';
        $scope.token = location.href.indexOf('token') > 0 ? decodeURIComponent(location.href.split('&')[1].split('token=')[1]) : '';
        $http.post(CONFIG.API_URL + '/api/account/ConfirmEmail',
            { email: $scope.email, token: $scope.token })
            .then(function success(response) {
                $scope.confirmEmailSuccess = true;
            }, function error(xHR) {
                $scope.confirmEmailFailed = true;
                $scope.confirmEmailErrorMsg = xHR.data != null ? xHR.data.Message : 'Unexpected error. Please try again';
            });
    });
});