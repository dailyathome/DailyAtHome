/// <reference path="../angular.min.js" />

var dahApp = angular.module('dahApp', ["ngRoute"]);
//                    .config(function ($routeProvider, $locationProvider) {
//                        $routeProvider
//                            .when("/Home", {
//                                templateUrl: "Views/Home.html"
//                             })
//                            .when("/Login", {
//                                templateUrl: "Views/Login.html",
//                                resolve: resolveController('/scripts/App/Controllers/Login.js')
//                            })
//                            .when("/Register", {
//                                templateUrl: "Views/Register.html",
//                                resolve: resolveController('/scripts/App/Controllers/Register.js')
//                            })
//                            .when("/Orders", {
//                                templateUrl: "Views/Orders.html",
//                                resolve: resolveController('/scripts/App/Controllers/Orders.js')
//                            })
//                            .otherwise({
//                                redirectTo: "Home"
//                            });
//                        $locationProvider.html5Mode(true);
//});
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
        .otherwise({
            redirectTo: "Home"
        });
    $locationProvider.html5Mode(true);
}]);

