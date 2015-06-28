/**
 * Created by Renan on 28/06/2015.
 */
(function () {
    'use-strict';

    angular
        .module('rcmApp')
        .factory('GenericService', GenericService);


    GenericService.$inject = ['$http)'];

    function GenericService($http) {
        var GenericService = function (controller) {
            this.controller = controller;

            this.save = function (entity) {
                return this.post('rest' + controller +'/save', entity);
            };

            this.delete = function (entity) {
                return $http.delete('rest/' + controller + '/delete/' + entity.id);
            };

            this.get = function (entity) {
                return $http.get('rest/' + controller + '/get/' + entity.id);
            };

            this.post = function (method, jsonObject) {
                return $http.post('rest/' + controller + '/' + method, jsonObject);
            }
        };

        return GenericService;

    }

})();