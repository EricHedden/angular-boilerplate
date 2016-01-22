(function() {

  'use strict';

    // Pass the usersMock to the app
    angular
        .module('app')
        .run('usersMock', usersMock);


    // Inject dependecies in the usersMock
    usersMock.$inject = ['$httpBackend'];

    
    // Define the usersMock
    function usersMock($httpBackend) {


        // Define base URI for user
        var usersBase = '/api/v1/users/';


        // Define the users variable, that will contain a json of data
        var users = [],                                              	// Array for list of users
        	respond_401 = {'error': 'Error message for 401'},			// Object to return in 401 status
        	respond_404 = {'error': 'Error message for 404'},			// Object to return in 404 status
        	respond_500 = {'error': 'Error message for 500'};			// Object to return in 500 status


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersMock
        |
        */
       

        // Remove the specified user from storage.
        function destroy(id) {

            return $httpBackend.whenDELETE(usersBase + id)
                        .respond(){

                        });
        };


        // Display a listing of users.
        function index() {

            return $httpBackend.whenGET(usersBase)
                        .respond(){


                        });
        };


        // Display a specified user.
        function show(id) {

            return $httpBackend.whenGET(usersBase + id)
                        .respond(){


                        });
        };


        // Store a newly created user in storage.
        function store(data) {

            return $httpBackend.whenPOST(usersBase)
                        .respond(){

                        });
        };

        // Update the specified user in storage.
        function update(id, data) {

            return $httpBackend.whenPUT(usersBase + id, data)
                        .respond(){

                        });
        };


        // Basic HTTP response to controller 
        function sendToCtrl(data) {

            return response.data;
        }


        // Return a random http response
        function randomHeader() {

        	var number = Math.floor((Math.random() * 10) + 1);

        	// Alg
        	if(number == 10) {

        		// Return a 404 header
        		return 404;
        	}

        	if(number == 9) {

        		// Return a 401 header
        		return 401;
        	}

        	if(number == 8) {

        		// Return a 500 header
        		return 500;
        	}

        	// Retrun a 200 header
        	return 200;

        }
    }

})();
