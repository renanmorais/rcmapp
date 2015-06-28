/**
 * Created by Renan on 28/06/2015.
 */
(function () {
    'use strict';

    PessoaService.$inject = ['GenericService'];

    function PessoaService(GenericService) {
        var PessoaService = {
            getGenericService: getGenericService

        };
        return PessoaService;

        function getGenericService() {
            return new GenericService('pessoa');
        }

    }
})();