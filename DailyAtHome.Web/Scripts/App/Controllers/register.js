﻿dahApp.controller('RegisterController', function ($scope, $http,$modal) {
    $scope.registermodel = { Email: '', Password: '', ConfirmPassword: '' };
    $scope.registerSuccess = false;
    $scope.btnRegisterClick = function () {
        if ($scope.registerForm.$valid) {
            $http.post('http://localhost:56259/api/account/register', $scope.registermodel).then(function (response) {
                $scope.registerSuccess = true;
                
            });           
        }
        else {
            $modal.open('#registerSuccessModal');
            $scope.registerForm.submitted = true;
        }
    }
});