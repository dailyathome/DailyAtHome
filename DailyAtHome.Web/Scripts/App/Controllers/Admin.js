dahApp.registerCtrl('AdminController', function ($scope, $http, CONFIG) {

    $scope.UpdateSuccess = false;
    $scope.UpdateFail = false;

    GetCategories();

    $scope.toggleEdit = function (cat) {
        toggle(cat);
    }

    $scope.CancelEdit = function (cat) {
        toggle(cat);
        GetCategories();
    }

    $scope.SaveEdit = function (cat) {
        cat.showEdit = cat.showEdit ? false : true;

        $http.post(CONFIG.API_URL + '/api/Header/UpdateCategory', cat)
            .then(function success(response) {
                $scope.UpdateSuccess = true;
                GetCategories();

            },
            function error(xHR) {
                $scope.UpdateFail = true;
                $scope.registerErrorMsg = 'Update failed';
                GetCategories();
            });
    }

    function GetCategories() {
        $scope.loading = true;
        $http.get(CONFIG.API_URL + '/api/Header/GetCategories').then(function (response) {
            $scope.Categories = response.data;

            angular.forEach($scope.Categories, function (obj) {
                obj["showEdit"] = true;
            })
        });
    }

    function toggle(cat) {
        $scope.UpdateSuccess = false;
        $scope.UpdateFail = false;
        cat.showEdit = cat.showEdit ? false : true;
    }

});