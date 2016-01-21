(function() {

  'use strict';

    // Pass the tasksDestroyCtrl to the app
    angular
        .module('app')
        .controller('tasksDestroyCtrl', tasksDestroyCtrl);


    // Inject dependecies in the tasksDestroyCtrl
    tasksDestroyCtrl.$inject = ['$http', 'tasksFactory'];

    
    // Define the tasksDestroyCtrl
    function tasksDestroyCtrl($http, tasksFactory) {


        // Define tasksDestroy as this for ControllerAs and auto-$scope
        var tasksDestroy = this;


        // Define the tasksDestroy functions that will be passed to the view
        tasksDestroy.tasks = [];                                                // Array for list of tasks
        tasksDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the tasksDestroyCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('tasksDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return tasksFactory.destroy(id).then(function(data) {

                // Custom function for success handling
            	alert('Custom success function goes here');

            }, function(data) {

            	// Custom function for error handling
				alert('Custom error function goes here');

            });
        };
    }

})();
