(function() {

  'use strict';

    // Pass the tasksIndexCtrl to the app
    angular
        .module('app')
        .controller('tasksIndexCtrl', tasksIndexCtrl);


    // Inject dependecies in the tasksIndexCtrl
    tasksIndexCtrl.$inject = ['$http', 'tasksFactory'];

    
    // Define the tasksIndexCtrl
    function tasksIndexCtrl($http, tasksFactory) {


        // Define tasksIndex as this for ControllerAs and auto-$scope
        var tasksIndex = this;


        // Define the tasksIndex functions that will be passed to the view
        tasksIndex.tasks = [];                                     // Array for list of tasksIndexs

        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();
        index();

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the tasksIndexCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('tasksIndexCtrl init');
        }


        // Get all tasksIndexs.
        function index() {

            return tasksFactory.index().then(function(data) {

            	// Assign data to array and return them
	            tasksFactory.tasks = data;
	            return tasksIndex.tasks;

            }, function(data) {

            	// Custom function for error handling
				alert('Custom function goes here');

            });
        };
    }

})();
