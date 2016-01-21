(function() {

  'use strict';

    // Pass the usersIndexCtrl to the app
    angular
        .module('app')
        .controller('usersIndexCtrl', usersIndexCtrl);


    // Inject dependecies in the usersIndexCtrl
    usersIndexCtrl.$inject = ['$http', 'usersFactory'];

    
    // Define the usersIndexCtrl
    function usersIndexCtrl($http, usersFactory) {


        // Define usersIndex as this for ControllerAs and auto-$scope
        var usersIndex = this;


        // Define the usersIndex functions that will be passed to the view
        usersIndex.users = [];                                     // Array for list of usersIndexs
        usersIndex.index = index;                                           // Get all resouces and pass them to usersIndex.users


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
        | Declaring all functions used in the usersIndexCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('usersIndexCtrl init');

        }


        // Get all usersIndexs.
        function index() {

            return usersFactory.index().then(function(data) {

            	// Assign data to array and return them
	            usersFactory.users = data;
	            return usersIndex.users;

            }, function(data) {

            	// Custom function for error handling
				alert('Custom function goes here');

            });
        };
    }

})();
