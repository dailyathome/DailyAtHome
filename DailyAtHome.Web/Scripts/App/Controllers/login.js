dahApp.registerCtrl('LoginController', function ($scope, $http) {
    $scope.loginmodel = { Email: '', Password: '', grant_type: 'password' };
    $scope.btnLoginClick = function () {
        if ($scope.loginForm.$valid) {
            $http.post("http://localhost:56259/token",
  "UserName=" + encodeURIComponent($scope.loginmodel.Email) +
    "&Password=" + encodeURIComponent($scope.loginmodel.Password) +
    "&grant_type=password",
  { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
).then(function (response) {
    sessionStorage.setItem('access_token', response.data.access_token);
    window.location.href = '/Views/Orders.html';
});
        }
        else {
            $scope.loginForm.submitted = true;
        }
    }
});