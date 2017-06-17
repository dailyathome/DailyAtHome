dahApp.controller('LoginController', function ($scope, $http) {
    $scope.registermodel = { Email: '', Password: '',ConfirmPassword:'' };
    $scope.btnRegisterClick = function () {
        if ($scope.registerForm.$valid) {
            $http.post('http://localhost:56259/api/account/register', $scope.registermodel).then(function (response) {
                console.log(response);
            });
        }
        else {
            $scope.registerForm.submitted = true;
        }
    }
});