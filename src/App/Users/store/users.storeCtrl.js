(function() {

  'use strict';

    // Pass the usersStoreCtrl to the app
    angular
        .module('app')
        .controller('usersStoreCtrl', usersStoreCtrl);


    // Inject dependecies in the usersStoreCtrl
    usersStoreCtrl.$inject = ['usersFactory'];

    
    // Define the usersStoreCtrl
    function usersStoreCtrl(usersFactory) {


        // Define usersStore as this for ControllerAs and auto-$scope
        var usersStore = this;


        // Define the usersStore functions that will be passed to the view
        usersStore.store = store;                                           // Store a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();
        store({sample:'sam ui'});

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersStoreCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('usersStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return usersFactory.store(data).then(function(data) {

                // Custom function for success handling
            	console.log('Custom success function goes here');

            }, function(data) {

            	// Custom function for error handling
				console.log('Custom error function goes here');

            });
        };
    }

})();
