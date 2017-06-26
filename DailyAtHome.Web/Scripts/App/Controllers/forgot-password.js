dahApp.registerCtrl('ForgotPasswordController', function ($scope, $http, CONFIG) {
    $scope.email = '';
    $scope.submitted = false;
    $scope.resetEmailSent = false;
    $scope.btnSubmitClick = function () {
        if ($scope.forgotPasswordForm.$valid) {
            $http.post(CONFIG.API_URL + '/api/account/ForgotPassword', JSON.stringify($scope.email) ).then(function (response) {
                $scope.resetEmailSent = true;
            });
        }
        else {
            $scope.submitted = true;
        }
    }
});