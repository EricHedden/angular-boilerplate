(function() {

  'use strict';

    // Pass the usersDestroyCtrl to the app
    angular
        .module('app')
        .controller('usersDestroyCtrl', usersDestroyCtrl);


    // Inject dependecies in the usersDestroyCtrl
    usersDestroyCtrl.$inject = ['usersFactory', '$stateParams'];

    
    // Define the usersDestroyCtrl
    function usersDestroyCtrl(usersFactory, $stateParams) {


        // Define usersDestroy as this for ControllerAs and auto-$scope
        var usersDestroy = this;


        // Define the usersDestroy functions that will be passed to the view
        usersDestroy.user = {};                                                 // Object for show the user
        usersDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the usersDestroyCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('usersDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return usersFactory.destroy(id).then(function(data) {

                // Custom function for success handling
            	console.log('Custom success function goes here');

            }, function(data) {

            	// Custom function for error handling
				console.log('Custom error function goes here');

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
                console.log('Custom error function goes here');

            });
        };
    }

})();
