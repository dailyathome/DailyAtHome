dahApp.registerCtrl('RegisterController', function ($scope, $http, CONFIG) {
    $scope.email = '';
    $scope.password = '';
    $scope.confirmPassword = '';
    $scope.registerFailed = false;
    $scope.registerErrorMsg = '';
    //$scope.registermodel = { email:$scope.email, password: $scope.password, confirmPassword: $scope.confirmPassword};
    $scope.registerSuccess = false;
    $scope.submitted = false;
    $scope.pwdRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/;
    $scope.loading = false;
    $scope.btnRegisterClick = function () {
        if ($scope.password !== $scope.confirmPassword) {
            $scope.registerForm.confirmPassword.$setValidity('mismatch', false);
        }
        if ($scope.registerForm.$valid) {
            $scope.loading = true;
            $http.post(CONFIG.API_URL + '/api/account/register', { email: $scope.email, password: $scope.password, confirmPassword: $scope.confirmPassword })
                .then(function success(response) {
                    $scope.registerSuccess = true;
                    $scope.registerFailed = false;
                    $scope.loading = false;
                },
            function error(xHR) {
                $scope.loading = false;
                $scope.registerFailed = true;
                $scope.registerSuccess = false;
                if (xHR.status == 400) { 
                    $scope.registerErrorMsg = xHR.data.ModelState[""][1];
                }
                else {
                    $scope.registerErrorMsg = xHR.data.Message;
                }
            });
        }
        else {
            // $modal.open('#registerSuccessModal');
            $scope.submitted = true;
        }
    }
});