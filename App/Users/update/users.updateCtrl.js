(function() {

  'use strict';

    // Pass the usersUpdateCtrl to the app
    angular
        .module('app')
        .controller('usersUpdateCtrl', usersUpdateCtrl);


    // Inject dependecies in the usersUpdateCtrl
    usersUpdateCtrl.$inject = ['usersFactory', '$stateParams'];

    
    // Define the usersUpdateCtrl
    function usersUpdateCtrl(usersFactory, $stateParams) {


        // Define usersUpdate as this for ControllerAs and auto-$scope
        var usersUpdate = this;


        // Define the usersUpdate functions that will be passed to the view
        usersUpdate.user = {};                                                  // Object for show the user
        usersUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersUpdateCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('usersUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return usersFactory.update(id, data).then(function(data) {

                // Custom function for success handling
            	alert('Custom success function goes here');

            }, function(data) {

            	// Custom function for error handling
				alert('Custom error function goes here');

            });
        };


        // Get the user
        function show(id) {

            return usersFactory.show(id).then(function(data) {

                // Assign data to array and return them
                usersFactory.user = data;
                return usersShow.user;

            }, function(data) {

                // Custom function for error handling
                alert('Custom function goes here');

            });
        };
    }

})();