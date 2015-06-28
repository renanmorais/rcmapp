/**
 * Created by Renan on 28/06/2015.
 */
(function () {
    'use strict';
    angular
        .module('rcmApp')
        .directive('rcmCrud', rcmCrud);

    rcmCrud.$inject = ['$location', '$rootScope'];

    function rcmCrud($location, $rootScope) {
        var directive = {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'rcmCrud.html',
            scope: {
                service: '=',
                labelSalvar: '@',
                labelCancelar: '@',
                cancelarPath: '@',
                salvarVisible: '=?',
                botoesAdicionais: '@',
                titulo: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ctrl) {
            scope.cancelarHRef = '#/' + attrs.cancelarPath;
            scope.salvarVisible = scope.salvarVisible != undefined ? scope.salvarVisible : true;
            attrs.salvarLabel = attrs.salvarLabel ? attrs.salvarLabel : 'Salvar';
            attrs.cancelarLabel = attrs.cancelarLabel ? attrs.cancelarLabel : 'Cancelar';

            if ($rootScope.entity) {
                scope.service.find($rootScope.entity).then(function (response) {
                    scope.$parent.entity = response.data;
                });
                $rootScope.entity = undefined;
            }
            scope.salvar = function () {
                if (scope.crudForm.$valid) {
                    scope.service.save(scope.$parent.entity).then(function () {
                        MessageService.addSuccess('Registro salvo com sucesso!');
                        $location.path(scope.cancelarPath);
                    });
                }
            };

            scope.cancelar = function () {
                $location.path(scope.cancelarPath);
            }
        }
    }



})
();