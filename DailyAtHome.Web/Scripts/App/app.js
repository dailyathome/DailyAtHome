/// <reference path="../angular.min.js" />

var dahApp = angular.module('dahApp', ["ngRoute"]);

dahApp.constant('CONFIG', {
    //'API_URL': 'http://sample-env-1.tit52nkbfk.us-west-2.elasticbeanstalk.com'
    'API_URL': 'http://localhost:56259'
});
dahApp.config(['$routeProvider', '$controllerProvider', '$locationProvider', function ($routeProvider, $controllerProvider, $locationProvider) {

    /*Creating a more synthesized form of service of $ controllerProvider.register*/
    dahApp.registerCtrl = $controllerProvider.register;

    function loadScript(path) {
        var result = $.Deferred(),
        script = document.createElement("script");
        script.async = "async";
        script.type = "text/javascript";
        script.src = path;
        script.onload = script.onreadystatechange = function (_, isAbort) {
            if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                if (isAbort)
                    result.reject();
                else
                    result.resolve();
            }
        };
        script.onerror = function () { result.reject(); };
        document.querySelector("head").appendChild(script);
        return result.promise();
    }

    function loader(arrayName) {

        return {
            load: function ($q) {
                var deferred = $q.defer(),
                map = arrayName.map(function (name) {
                    return loadScript('/scripts/App/Controllers/' + name + ".js");
                });

                $q.all(map).then(function (r) {
                    deferred.resolve();
                });

                return deferred.promise;
            }
        };
    }

    $routeProvider
        .when('/Home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController',
            resolve: loader(['home'])
        })
        .when('/Login', {
            templateUrl: 'Views/Login.html',
            controller: 'LoginController',
            resolve: loader(['login'])
        })
        .when('/Register', {
            templateUrl: 'Views/Register.html',
            controller: 'RegisterController',
            resolve: loader(['register'])
        })
        .when('/Orders', {
            templateUrl: 'Views/Orders.html',
            controller: 'ordersController',
            resolve: loader(['orders'])
        })
        .when('/forgot-password', {
            templateUrl: 'Views/ForgotPassword.html',
            controller: 'ForgotPasswordController',
            resolve: loader(['forgot-password'])
        })
        .when('/reset-password', {
            templateUrl: 'Views/ResetPassword.html',
            controller: 'ResetPasswordController',
            resolve: loader(['reset-password'])
        })
        .when('/confirm-email', {
            templateUrl: 'Views/ConfirmEmail.html',
            controller: 'ConfirmEmailController',
            resolve: loader(['confirm-email'])
        })
         .when('/products', {
             templateUrl: 'Views/Products.html',
             controller: 'ProductsController',
             resolve: loader(['products'])
         })
        .when('/Admin', {
            templateUrl: 'Views/Admin/Admin.html',
            controller: 'AdminController',
            resolve: loader(['admin'])
        })
        .otherwise({
            redirectTo: "Home"
        });
    $locationProvider.html5Mode(true);
}]);

dahApp.controller("HeaderController", function ($scope, $http, CONFIG) {

    $http.get(CONFIG.API_URL + '/api/Header/GetCategories').then(function (response) {
        $scope.Categories = response.data;
    });
});

