dahApp.registerCtrl('ResetPasswordController', function ($scope, $http, CONFIG) {
    $scope.email = '';
    $scope.token = '';
    $scope.password = '';
    $scope.confirmPassword = '';
    $scope.token = '';
    //$scope.registermodel = { email:$scope.email, password: $scope.password, confirmPassword: $scope.confirmPassword};
    $scope.pwdResetSuccess = false;
    $scope.pwdResetErrorMsg = '';
    $scope.submitted = false;
    $scope.pwdResetFailed = false;
    $scope.loading = false;
    $scope.pwdRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/;
    $scope.btnResetPasswordClick = function () {
        if ($scope.password !== $scope.confirmPassword) {
            $scope.ResetPasswordForm.confirmPassword.$setValidity('mismatch', false);
        }
        else {
            $scope.ResetPasswordForm.confirmPassword.$setValidity('mismatch', true);
        }
        if ($scope.ResetPasswordForm.$valid) {
            $scope.loading = true;
            $scope.email = location.href.indexOf('userId') > 0 ? decodeURIComponent(location.href.split('&')[0].split('userId=')[1]) : '';
            $scope.token = location.href.indexOf('token') > 0 ? decodeURIComponent(location.href.split('&')[1].split('token=')[1]) : '';
            $http.post(CONFIG.API_URL + '/api/account/ResetPassword', { email: $scope.email, password: $scope.password, confirmPassword: $scope.confirmPassword, token: $scope.token })
                .then(function (response) {
                    $scope.pwdResetSuccess = true;
                    $scope.pwdResetFailed = false;
                    $scope.loading = false;
                }, function error(xHR) {
                    $scope.loading = false;
                    $scope.pwdResetFailed = true;
                    $scope.pwdResetSuccess = false;
                    $scope.pwdResetErrorMsg = 'Sorry, Something went wrong. Please try again';
                });
        }
        else {
            $scope.submitted = true;
        }
    }
});