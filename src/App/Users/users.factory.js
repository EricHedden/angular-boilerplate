(function() {

  'use strict';

    // Pass the usersFactory to the app
    angular
        .module('app')
        .factory('usersFactory', usersFactory);


    // Inject dependecies in the usersFactory
    usersFactory.$inject = ['$http'];

    
    // Define the usersFactory
    function usersFactory($http) {


        // Define base URI for user user
        var userBase = '/api/v1/users/';


        // Define the user factory object to return
        var usersFactory = {

            index: index,
            show: show,
            store: store,
            update: update,
            destroy: destroy,

        };


        // Return the user factory
        return usersFactory;


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersFactory
        |
        */
       

        // Display a listing of users.
        function index() {

            return $http.get(userBase)
                        .then(sendToCtrl(response));

        };


        // Display a specified user.
        function show(id) {

            return $http.get(userBase + id)
                        .then(sendToCtrl(response));

        };


        // Store a newly created user in storage.
        function store(data) {

            return $http.post(userBase, data)
                        .then(sendToCtrl(response));

        };


        // Update the specified user in storage.
        function update(id, data) {

            return $http.post(userBase + id, data)
                        .then(sendToCtrl(response));

        };


        // Remove the specified user from storage.
        function destroy(id) {

            return $http.get(userBase + id)
                        .then(sendToCtrl(response));

        };


        // Basic HTTP response to controller 
        function sendToCtrl(response) {

            return response.data;

        }
    }

})();
