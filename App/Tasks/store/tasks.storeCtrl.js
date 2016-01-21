(function() {

  'use strict';

    // Pass the tasksStoreCtrl to the app
    angular
        .module('app')
        .controller('tasksStoreCtrl', tasksStoreCtrl);


    // Inject dependecies in the tasksStoreCtrl
    tasksStoreCtrl.$inject = ['$http', 'tasksFactory'];

    
    // Define the tasksStoreCtrl
    function tasksStoreCtrl($http, tasksFactory) {


        // Define tasksStore as this for ControllerAs and auto-$scope
        var tasksStore = this;


        // Define the tasksStore functions that will be passed to the view
        tasksStore.store = store;                                           // Create a new task


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the tasksStoreCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('tasksStoreCtrl init');

        }


        // Get all tasksStores.
        function store() {

            return tasksStoreFactory.store(data).then(function(data) {

                // Custom function for success handling
                alert('Custom success function goes here');

            }, function(data) {

                // Custom function for error handling
                alert('Custom error function goes here');

            });
        };
    }

})();
