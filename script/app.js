/**
 * Created by Renan on 28/06/2015.
 */
(function () {
    'use strict';
    /**
     * Main module of the application.
     */
    angular
        .module('rcmApp', [
            'ngAnimate',
            'ngAria',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/about', {
                    templateUrl: '/views/about.html',
                    controller: 'AboutCtrl'
                })
                .when('/pessoa', {
                    templateUrl: '/views/pessoa/pessoaPesquisa.html',
                    controller: 'PessoaPesquisaController'
                })
                .when('/pessoa/cadastro', {
                    templateUrl: '/views/pessoa/pessoaCasdastro.html',
                    controller: 'PessoaCadastroController'
                })
                .when('/pessoa/pesquisa', {
                    templateUrl: '/views/pessoa/pessoaPesquisa.html',
                    controller: 'PessoaPesquisaController'
                })

                .otherwise({
                    redirectTo: '/'
                });
        });
})();
