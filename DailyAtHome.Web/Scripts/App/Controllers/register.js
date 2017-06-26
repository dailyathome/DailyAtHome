dahApp.registerCtrl('RegisterController', function ($scope, $http, CONFIG) {
    $scope.email = '';
    $scope.password = '';
    $scope.confirmPassword = '';
    //$scope.registermodel = { email:$scope.email, password: $scope.password, confirmPassword: $scope.confirmPassword};
    $scope.registerSuccess = false;
    $scope.submitted = false;
    $scope.pwdRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/;
    $scope.btnRegisterClick = function () {
        if ($scope.registerForm.$valid) {
            $http.post(CONFIG.API_URL + '/api/account/register', { email: $scope.email, password: $scope.password, confirmPassword: $scope.confirmPassword }).then(function (response) {
                $scope.registerSuccess = true;
            });
        }
        else {
            // $modal.open('#registerSuccessModal');
            $scope.submitted = true;
        }
    }
});