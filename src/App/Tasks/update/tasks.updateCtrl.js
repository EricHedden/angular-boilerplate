(function() {

  'use strict';

    // Pass the tasksUpdateCtrl to the app
    angular
        .module('app')
        .controller('tasksUpdateCtrl', tasksUpdateCtrl);


    // Inject dependecies in the tasksUpdateCtrl
    tasksUpdateCtrl.$inject = ['$http', 'tasksFactory'];

    
    // Define the tasksUpdateCtrl
    function tasksUpdateCtrl($http, tasksFactory) {


        // Define tasksUpdate as this for ControllerAs and auto-$scope
        var tasksUpdate = this;


        // Define the tasksUpdate functions that will be passed to the view
        tasksUpdate.tasks = [];                                     // Array for list of tasksUpdates
        tasksUpdate.update = update;                                // Get all resouces and pass them to tasksUpdate.tasks


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();
        tasksUpdate.update();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the tasksUpdateCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('tasksUpdateCtrl init');

        }


        // Get all tasksUpdates.
        function update() {

            return tasksFactory.update().then(function(data) {

                // Custom function for success handling
                alert('Custom success function goes here');

            }, function(data) {

                // Custom function for error handling
                alert('Custom error function goes here');

            });
        };
    }

})();
