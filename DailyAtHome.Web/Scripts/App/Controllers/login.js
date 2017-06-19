dahApp.registerCtrl('LoginController', function ($scope, $http, CONFIG) {

    $scope.loginmodel = { Email: '', Password: '', grant_type: 'password' };
    $scope.btnLoginClick = function () {
        if ($scope.loginForm.$valid) {
            $http.post(CONFIG.API_URL + "/token",
  "UserName=" + encodeURIComponent($scope.loginmodel.Email) +
    "&Password=" + encodeURIComponent($scope.loginmodel.Password) +
    "&grant_type=password",
  { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
).then(function (response) {
    sessionStorage.setItem('access_token', response.data.access_token);
    window.location.href = '/Orders';
});
        }
        else {
            $scope.loginForm.submitted = true;
        }
    }
});