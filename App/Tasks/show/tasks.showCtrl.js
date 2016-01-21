(function() {

  'use strict';

    // Pass the tasksShowCtrl to the app
    angular
        .module('app')
        .controller('tasksShowCtrl', tasksShowCtrl);


    // Inject dependecies in the tasksShowCtrl
    tasksShowCtrl.$inject = ['$http', 'tasksFactory'];

    
    // Define the tasksShowCtrl
    function tasksShowCtrl($http, tasksFactory) {


        // Define tasksShow as this for ControllerAs and auto-$scope
        var tasksShow = this;


        // Define the tasksShow functions that will be passed to the view
        tasksShow.task = [];                                                // Array for task
        tasksShow.show = show;                                              // Get a resouce and pass them to tasksShow.task


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();
        tasksShow.show();


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the tasksShowCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('tasksShowCtrl init');

        }


        // Get all tasksShows.
        function show() {

            return tasksShowFactory.show(id).then(function(data) {

            	// Assign data to array and return them
	            tasksFactory.task = data;
	            return tasksShow.task;

            }, function(data) {

            	// Custom function for error handling
				alert('Custom function goes here');

            });
        };
    }

})();
