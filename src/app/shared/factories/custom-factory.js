(function() {

  'use strict';

    // Pass the customsFactory to the app
    angular
        .module('app')
        .factory('customsFactory', customsFactory);


    // Define the customsFactory
    function customsFactory() {


        // Inject with ng-annotate
        "ngInject";


        // Define the custom factory object to return
        var customsFactory = {

            init: init

        };


        // Return the custom factory
        return customsFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the customsFactory
        |
        */


        // Display a listing of customs.
        function init() {

            console.log('Init custom factory');
        }

    }

})();
