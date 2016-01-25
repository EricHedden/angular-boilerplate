(function(){

	'use strict';

	// Pass the mockHelperProvider to the app
	angular
		.module('app')
		.provider('mockHelper', mockHelperProvider);




    // Define the mockHelperProvider
	function mockHelperProvider() {

		// Holds the service factory function
		this.$get = MockHelper;

		MockHelper.$inject = ['$httpBackend'];

		// Define the mockHelperProvider
		function MockHelper($httpBackend) {

			$httpBackend.whenGET(/\.html$/).passThrough();

			// Define the object to return
			var service = {

				configureMocks: configureMocks,		// Configure all the states for the route
			};


			// Return the object
			return service;


	        /*
	        |--------------------------------------------------------------------------
	        | Functions
	        |--------------------------------------------------------------------------
	        |
	        | Declaring all functions used in the MockHelper
	        |
	        */
	       

			// Configure all the mocks for the route
			function configureMocks(mocks) {

				mocks.forEach(function(mock){

					console.log(mock);
					$httpBackend.when(mock.method, mock.url).respond(mock.respond);
				});
				
			}
		}
	}

})();