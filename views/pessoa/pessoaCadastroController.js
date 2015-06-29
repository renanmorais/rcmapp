/**
 * Created by Renan on 28/06/2015.
 */
(function () {
    'use-strict';

    angular
        .module('rcmApp', [])
        .controller('PessoaCadastroController' , PessoaCadastroController);

    PessoaCadastroController.$inject = ['PessoaService'];

    function PessoaCadastroController(PessoaService) {
        var vm = this;


    }

})();