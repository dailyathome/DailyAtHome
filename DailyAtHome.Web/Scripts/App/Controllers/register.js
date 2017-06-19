dahApp.registerCtrl('RegisterController', function ($scope, $http, CONFIG) {
    $scope.registermodel = { Email: '', Password: '', ConfirmPassword: '' };
    $scope.registerSuccess = false;
    $scope.btnRegisterClick = function () {
        if ($scope.registerForm.$valid) {
            $http.post(CONFIG.API_URL + '/api/account/register', $scope.registermodel).then(function (response) {
                $scope.registerSuccess = true;
                
            });           
        }
        else {
           // $modal.open('#registerSuccessModal');
            $scope.registerForm.submitted = true;
        }
    }
});