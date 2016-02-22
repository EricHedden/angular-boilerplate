(function() {

  'use strict';


    // Pass the customDirective to the app
    angular
        .module('app')
        .directive('customDirective', customDirective);


    // Define the customDirective
    function customDirective() {


        var directive = {

                restrict: 'EA',
                templateUrl: 'app/shared/components/custom-component/custom-component.html',
                scope: {
                    customString: '@',                      // Isolated scope string
                    customAttribute: '=',                   // Isolated scope two-way data binding
                    customAction: '&'                       // Isolated scope action
                },
                link: linkFunc,
                controller: customDirectiveController,
                controllerAs: 'customDirective'
        };


        return directive;


        function linkFunc(scope, el, attr, ctrl) {

            // Do stuff...
        }
    }


    function customDirectiveController() {

        // Do stuff...
    }

})();
