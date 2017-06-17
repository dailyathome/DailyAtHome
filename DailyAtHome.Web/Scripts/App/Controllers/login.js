dahApp.controller('LoginController', function ($scope, $http) {
    $scope.loginmodel = { Email: '', Password: '' };
    $scope.btnLoginClick = function () {
        if ($scope.loginForm.$valid) {
            $http.post('http://localhost:65286/token', $scope.loginmodel).then(function (response) {
                sessionStorage.setItem('access_token', response.access_token);
            });
        }
        else {
            $scope.loginForm.submitted = true;
        }
    }
});