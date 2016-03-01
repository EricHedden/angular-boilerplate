(function() {

  'use strict';

    // Pass the customFilter to the app
    angular
        .module('app')
        .filter('customFilter', customFilter);


    // Define the customFilter
    function customFilter() {

        // Define filter
        var filter = function(input,arg) {

			return 'Custom filter ouput';
		};

        // Return filter
        return filter;

    }
})();
