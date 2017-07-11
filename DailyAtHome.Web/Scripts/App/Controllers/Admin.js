dahApp.registerCtrl('AdminController', function ($scope, $http, CONFIG) {

    $http.get(CONFIG.API_URL + '/api/Header/GetCategories').then(function (response) {
        $scope.Categories = response.data;

        angular.forEach($scope.Categories, function (obj) {
            obj["showEdit"] = true;
        })
    });

    $scope.toggleEdit = function (cat) {
        cat.showEdit = cat.showEdit ? false : true;
    }

    $scope.SaveEdit = function (cat) {
        cat.showEdit = cat.showEdit ? false : true;
        $scope.loading = true;

        $http.post(CONFIG.API_URL + '/api/Header/UpdateCategory')
            .then(function success(response) {
                $scope.UpdateSuccess = true;
                $scope.loading = false;

            },
            function error(xHR) {
                $scope.loading = false;
                $scope.UpdateFail = true;
                $scope.registerErrorMsg = 'Update failed';
            });
    }



});