(function() {

  'use strict';

    // Pass the tasksFactory to the app
    angular
        .module('app')
        .factory('tasksFactory', tasksFactory);


    // Inject dependecies in the tasksFactory
    tasksFactory.$inject = ['$http'];

    
    // Define the tasksFactory
    function tasksFactory($http) {


        // Define base URI for task
        var tasksBase = '/api/v1/tasks/';


        // Define the tasks factory object to return
        var tasksFactory = {

            destroy: destroy,
            index: index,
            show: show,
            store: store,
            update: update,

        };


        // Return the tasks factory
        return tasksFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the tasksFactory
        |
        */
       

        // Display a listing of tasks.
        function index() {

            return $http.get(tasksBase)
                        .then(sendToCtrl(response));

        };


        // Display a specified task.
        function show(id) {

            return $http.get(tasksBase + id)
                        .then(sendToCtrl(response));

        };


        // Store a newly created task in storage.
        function store(data) {

            return $http.post(tasksBase, data)
                        .then(sendToCtrl(response));

        };


        // Update the specified task in storage.
        function update(id, data) {

            return $http.post(tasksBase + id, data)
                        .then(sendToCtrl(response));

        };


        // Remove the specified task from storage.
        function destroy(id) {

            return $http.get(tasksBase + id)
                        .then(sendToCtrl(response));

        };


        // Basic HTTP response to controller 
        function sendToCtrl(response) {

            return response.data;

        }
    }

})();
