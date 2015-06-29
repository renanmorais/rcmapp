/**
 * Created by Renan on 28/06/2015.
 */
(function () {
    'use-strict';

    angular
        .module('rcmApp', [])
        .controller('PessoaPesquisaController' , PessoaPesquisaController);

    PessoaPesquisaController.$inject = ['PessoaService'];

    function PessoaPesquisaController(PessoaService) {
        var vm = this;


    }

})();