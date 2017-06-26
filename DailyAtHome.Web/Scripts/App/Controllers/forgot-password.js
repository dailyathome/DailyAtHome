dahApp.registerCtrl('ForgotPasswordController', function ($scope, $http, CONFIG) {
    $scope.email = '';
    $scope.submitted = false;
    $scope.resetEmailSent = false;
    $scope.resetEmailFailed = false;
    $scope.loading = false;
    $scope.forgotPasswordFormErrorMsg = '';
    $scope.btnSubmitClick = function () {
        if ($scope.forgotPasswordForm.$valid) {
            $scope.loading = true;
            $http.post(CONFIG.API_URL + '/api/account/ForgotPassword', JSON.stringify($scope.email))
                .then(function success(response) {
                    $scope.resetEmailSent = true;
                    $scope.loading = false;
                }, function error(xHR) {
                    $scope.loading = false;
                    $scope.resetEmailFailed = true;
                    $scope.forgotPasswordFormErrorMsg = xHR.data != null ? xHR.data.Message : 'Unexpected error. Please try again';
                });
        }
        else {
            $scope.submitted = true;
        }
    }
});