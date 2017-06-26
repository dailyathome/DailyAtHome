dahApp.registerCtrl('LoginController', function ($scope, $http, CONFIG) {
    $scope.submitted = false;
    $scope.loading = false;
    $scope.loginFailed = false;
    $scope.loginError = '';
    $scope.loginmodel = { Email: '', Password: '', grant_type: 'password' };
    $scope.btnLoginClick = function () {
        if ($scope.loginForm.$valid) {
            $scope.loading = true;
            $http.post(CONFIG.API_URL + "/token",
  "UserName=" + encodeURIComponent($scope.loginmodel.Email) +
    "&Password=" + encodeURIComponent($scope.loginmodel.Password) +
    "&grant_type=password",
  { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
).then(function success(response) {
    sessionStorage.setItem('access_token', response.data.access_token);
    window.location.href = '/Orders';
},
function error(xHR) {
    $scope.loading = false;
    $scope.loginFailed = true;
    if (xHR.status == 400) {
        $scope.loginError = xHR.data.error_description;
    }
});
        }
        else {
            $scope.submitted = true; 
        }
    }
});