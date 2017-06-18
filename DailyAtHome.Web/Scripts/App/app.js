/// <reference path="../angular.min.js" />

var dahApp = angular.module('dahApp', ["ngRoute"])
                    .config(function ($routeProvider, $locationProvider) {
                        $routeProvider
                            .when("/Home", {
                                templateUrl: "Views/Home.html"
                             })
                            .when("/Login", {
                                templateUrl: "Views/Login.html",
                                resolve: resolveController('/scripts/App/Controllers/Login.js')
                            })
                            .when("/Register", {
                                templateUrl: "Views/Register.html",
                                resolve: resolveController('/scripts/App/Controllers/Register.js')
                            })
                            .when("/Orders", {
                                templateUrl: "Views/Orders.html",
                                resolve: resolveController('/scripts/App/Controllers/Orders.js')
                            })
                            .otherwise({
                                redirectTo: "Home"
                            });
                        $locationProvider.html5Mode(true);
                    });

