(function(){

	'use strict';

	// Define angular app module
	angular.module('app', ['core.routing', 'core.mocking', 'ui.router', 'ngMockE2E']);

})();

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

(function() {

  'use strict';

    // Pass the tasksRoute to the app
	angular
	    .module('app')
	    .run(tasksRoute);


    // Inject dependecies in the tasksRoute
	tasksRoute.$inject = ['routerHelper'];


	// Define the tasksRoute
    function tasksRoute(routerHelper) {

    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

    	return [{

		    state: 'tasks-index',
		    config: {
		        url: '/tasks',
		        templateUrl: 'App/Tasks/index/tasks.indexView.html',
		        controller: 'tasksIndexCtrl',
		        controllerAs: 'tasksIndex'
		    }
		}, {
		    state: 'tasks-store',
		    config: {
		        url: '/tasks/store',
		        templateUrl: 'App/Tasks/store/tasks.storeView.html',
		        controller: 'tasksStoreCtrl',
		        controllerAs: 'tasksStore'
		    }
		}, {
		    state: 'tasks-show',
		    config: {
		        url: '/tasks/:id',
		        templateUrl: 'App/Tasks/show/tasks.showView.html',
		        controller: 'tasksShowCtrl',
		        controllerAs: 'tasksShow'
		    }
		}, {
		    state: 'tasks-update',
		    config: {
		        url: '/tasks/:id/update',
		        templateUrl: 'App/Tasks/update/tasks.updateView.html',
		        controller: 'tasksUpdateCtrl',
		        controllerAs: 'tasksUpdate'
		    }
		}, {
		    state: 'tasks-destroy',
		    config: {
		        url: '/tasks/:id/delete',
		        templateUrl: 'App/Tasks/destroy/tasks.destroyView.html',
		        controller: 'tasksDestroyCtrl',
		        controllerAs: 'tasksDestroy'
		    }
		}];
    }

})();

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
                        .then(function(data){return data});

        };


        // Display a specified user.
        function show(id) {

            return $http.get(userBase + id)
                        .then(function(data){return data.data});

        };


        // Store a newly created user in storage.
        function store(data) {

            return $http.post(userBase, data)
                        .then(function(data){return data.data});

        };


        // Update the specified user in storage.
        function update(id, data) {

            return $http.post(userBase + id, data)
                        .then(function(data){return data.data});

        };


        // Remove the specified user from storage.
        function destroy(id) {

            return $http.get(userBase + id)
                        .then(function(data){return data.data});

        };

    }

})();

(function() {

  'use strict';

    // Pass the usersMock to the app
	angular
	    .module('app')
	    .run(usersMock);


    // Inject dependecies in the usersMock
	usersMock.$inject = ['mockHelper'];


	// Define the usersMock
    function usersMock(mockHelper) {

    	// Intercept all the states and add them to the routing
    	mockHelper.configureMocks(getMocks());
    }


    // Define the getMocks
    function getMocks() {

		return [{
			
		    method: 'GET',
		    url: '/api/v1/users/',
		    respond: function(data){ console.log('al'); return data; }
		}]
	}




})();

(function() {

  'use strict';

    // Pass the usersRoute to the app
	angular
	    .module('app')
	    .run(usersRoute);


    // Inject dependecies in the usersRoute
	usersRoute.$inject = ['routerHelper'];


	// Define the usersRoute
    function usersRoute(routerHelper) {

    	// Intercept all the states and add them to the routing
    	routerHelper.configureStates(getStates());
    }


    // Define the getStates
    function getStates() {

		return [{
			
		    state: 'users-index',
		    config: {
		        url: '/users',
		        templateUrl: 'App/Users/index/users.indexView.html',
		        controller: 'usersIndexCtrl',
		        controllerAs: 'usersIndex'
		    }
		}, {
		    state: 'users-store',
		    config: {
		        url: '/users/store',
		        templateUrl: 'App/Users/store/users.storeView.html',
		        controller: 'usersStoreCtrl',
		        controllerAs: 'usersStore'
		    }
		}, {
		    state: 'users-show',
		    config: {
		        url: '/users/:id',
		        templateUrl: 'App/Users/show/users.showView.html',
		        controller: 'usersShowCtrl',
		        controllerAs: 'usersShow'
		    }
		}, {
		    state: 'users-update',
		    config: {
		        url: '/users/:id/update',
		        templateUrl: 'App/Users/update/users.updateView.html',
		        controller: 'usersUpdateCtrl',
		        controllerAs: 'usersUpdate'
		    }
		}, {
		    state: 'users-destroy',
		    config: {
		        url: '/users/:id/delete',
		        templateUrl: 'App/Users/destroy/users.destroyView.html',
		        controller: 'usersDestroyCtrl',
		        controllerAs: 'usersDestroy'
		    }
		}]
	}

})();

(function() {

  'use strict';

    // Pass the tasksDestroyCtrl to the app
    angular
        .module('app')
        .controller('tasksDestroyCtrl', tasksDestroyCtrl);


    // Inject dependecies in the tasksDestroyCtrl
    tasksDestroyCtrl.$inject = ['$http', 'tasksFactory'];

    
    // Define the tasksDestroyCtrl
    function tasksDestroyCtrl($http, tasksFactory) {


        // Define tasksDestroy as this for ControllerAs and auto-$scope
        var tasksDestroy = this;


        // Define the tasksDestroy functions that will be passed to the view
        tasksDestroy.tasks = [];                                                // Array for list of tasks
        tasksDestroy.destroy = destroy;                                         // Delete a resource


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
        | Declaring all functions used in the tasksDestroyCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('tasksDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return tasksFactory.destroy(id).then(function(data) {

                // Custom function for success handling
            	alert('Custom success function goes here');

            }, function(data) {

            	// Custom function for error handling
				alert('Custom error function goes here');

            });
        };
    }

})();

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

(function() {

  'use strict';

    // Pass the tasksStoreCtrl to the app
    angular
        .module('app')
        .controller('tasksStoreCtrl', tasksStoreCtrl);


    // Inject dependecies in the tasksStoreCtrl
    tasksStoreCtrl.$inject = ['$http', 'tasksFactory'];

    
    // Define the tasksStoreCtrl
    function tasksStoreCtrl($http, tasksFactory) {


        // Define tasksStore as this for ControllerAs and auto-$scope
        var tasksStore = this;


        // Define the tasksStore functions that will be passed to the view
        tasksStore.store = store;                                           // Create a new task


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
        | Declaring all functions used in the tasksStoreCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('tasksStoreCtrl init');

        }


        // Get all tasksStores.
        function store() {

            return tasksStoreFactory.store(data).then(function(data) {

                // Custom function for success handling
                alert('Custom success function goes here');

            }, function(data) {

                // Custom function for error handling
                alert('Custom error function goes here');

            });
        };
    }

})();

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
        tasksUpdate.update = update;                                           // Get all resouces and pass them to tasksUpdate.tasks


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

            return tasksUpdateFactory.update().then(function(data) {

                // Custom function for success handling
                alert('Custom success function goes here');

            }, function(data) {

                // Custom function for error handling
                alert('Custom error function goes here');

            });
        };
    }

})();

(function() {

  'use strict';

    // Pass the usersDestroyCtrl to the app
    angular
        .module('app')
        .controller('usersDestroyCtrl', usersDestroyCtrl);


    // Inject dependecies in the usersDestroyCtrl
    usersDestroyCtrl.$inject = ['usersFactory', '$stateParams'];

    
    // Define the usersDestroyCtrl
    function usersDestroyCtrl(usersFactory, $stateParams) {


        // Define usersDestroy as this for ControllerAs and auto-$scope
        var usersDestroy = this;


        // Define the usersDestroy functions that will be passed to the view
        usersDestroy.user = {};                                                 // Object for show the user
        usersDestroy.destroy = destroy;                                         // Delete a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();
        show($stateParams.id);
        

        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersDestroyCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('usersDestroyCtrl init');
        }


        // Delete a resource
        function destroy(id) {

            return usersFactory.destroy(id).then(function(data) {

                // Custom function for success handling
            	alert('Custom success function goes here');

            }, function(data) {

            	// Custom function for error handling
				alert('Custom error function goes here');

            });
        };


        // Get the user
        function show(id) {

            return usersFactory.show(id).then(function(data) {

                // Assign data to array and return them
                usersFactory.user = data;
                return usersShow.user;

            }, function(data) {

                // Custom function for error handling
                alert('Custom function goes here');

            });
        };
    }

})();

(function() {

  'use strict';

    // Pass the usersIndexCtrl to the app
    angular
        .module('app')
        .controller('usersIndexCtrl', usersIndexCtrl);


    // Inject dependecies in the usersIndexCtrl
    usersIndexCtrl.$inject = ['usersFactory'];

    
    // Define the usersIndexCtrl
    function usersIndexCtrl(usersFactory) {


        // Define usersIndex as this for ControllerAs and auto-$scope
        var usersIndex = this;


        // Define the usersIndex functions that will be passed to the view
        usersIndex.users = [];                                              // Array for list of users


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();
        index()

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


        // Get all users.
        function index() {

            return usersFactory.index().then(function(data) {

            	// Assign data to array and return them
	            usersFactory.users = data.data;
                console.log('utenti', usersFactory.users);
	            return usersIndex.users;

            }, function(data) {

            	// Custom function for error handling
                console.log('Errore: ',data);

            });
        };
    }

})();

(function() {

  'use strict';

    // Pass the usersShowCtrl to the app
    angular
        .module('app')
        .controller('usersShowCtrl', usersShowCtrl);


    // Inject dependecies in the usersShowCtrl
    usersShowCtrl.$inject = ['usersFactory', '$stateParams'];

    
    // Define the usersShowCtrl
    function usersShowCtrl(usersFactory, $stateParams) {


        // Define usersShow as this for ControllerAs and auto-$scope
        var usersShow = this;


        // Define the usersShow functions that will be passed to the view
        usersShow.user = {};                                                // Object for show the user
        

        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersShowCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('usersShowCtrl init');
        }


        // Get the user
        function show(id) {

            return usersFactory.show(1).then(function(data) {

            	// Assign data to array and return them
	            usersFactory.user = data;
                console.log(data);
	            return usersShow.user;

            }, function(data) {

            	// Custom function for error handling
				alert('Custom function goes here');

            });
        };
    }

})();

(function() {

  'use strict';

    // Pass the usersStoreCtrl to the app
    angular
        .module('app')
        .controller('usersStoreCtrl', usersStoreCtrl);


    // Inject dependecies in the usersStoreCtrl
    usersStoreCtrl.$inject = ['usersFactory'];

    
    // Define the usersStoreCtrl
    function usersStoreCtrl(usersFactory) {


        // Define usersStore as this for ControllerAs and auto-$scope
        var usersStore = this;


        // Define the usersStore functions that will be passed to the view
        usersStore.store = store;                                           // Store a resource


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
        | Declaring all functions used in the usersStoreCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('usersStoreCtrl init');
        }


        // Delete a resource
        function store(data) {

            return usersFactory.store(data).then(function(data) {

                // Custom function for success handling
            	alert('Custom success function goes here');

            }, function(data) {

            	// Custom function for error handling
				alert('Custom error function goes here');

            });
        };
    }

})();

(function() {

  'use strict';

    // Pass the usersUpdateCtrl to the app
    angular
        .module('app')
        .controller('usersUpdateCtrl', usersUpdateCtrl);


    // Inject dependecies in the usersUpdateCtrl
    usersUpdateCtrl.$inject = ['usersFactory', '$stateParams'];

    
    // Define the usersUpdateCtrl
    function usersUpdateCtrl(usersFactory, $stateParams) {


        // Define usersUpdate as this for ControllerAs and auto-$scope
        var usersUpdate = this;


        // Define the usersUpdate functions that will be passed to the view
        usersUpdate.user = {};                                                  // Object for show the user
        usersUpdate.update = update;                                            // Update a resource


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */
        

        initLog();
        show($stateParams.id);


        /*
        |--------------------------------------------------------------------------
        | Functions
        |--------------------------------------------------------------------------
        |
        | Declaring all functions used in the usersUpdateCtrl
        |
        */
       

        // Sample for init function
        function initLog() {

            console.log('usersUpdateCtrl init');
        }


        // Delete a resource
        function update(id, data) {

            return usersFactory.update(id, data).then(function(data) {

                // Custom function for success handling
            	alert('Custom success function goes here');

            }, function(data) {

            	// Custom function for error handling
				alert('Custom error function goes here');

            });
        };


        // Get the user
        function show(id) {

            return usersFactory.show(id).then(function(data) {

                // Assign data to array and return them
                usersFactory.user = data;
                return usersShow.user;

            }, function(data) {

                // Custom function for error handling
                alert('Custom function goes here');

            });
        };
    }

})();

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
(function(){

	'use strict';

	// Define angular core.mocking module
	angular.module('core.mocking', ['ngMockE2E']);

})();
(function(){

	'use strict';

	// Define angular core.routing module
	angular.module('core.routing', ['ui.router']);

})();
(function(){

	'use strict';

	// Pass the routerHelperProvider to the app
	angular
		.module('core.routing')
		.provider('routerHelper', routerHelperProvider);


    // Inject dependecies in the routerHelperProvider
	routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];


    // Define the routerHelperProvider
	function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {


		// Holds the service factory function
		this.$get = RouterHelper;

		// Declare html5Mode true for a clean url
		$locationProvider.html5Mode(true);


		// Declare the otherwise, go here if no state is found
		//$urlRouterProvider.otherwise('/404');


    	// Inject dependecies in the RouterHelper
		RouterHelper.$inject = ['$state'];


		// Define the routerHelperProvider
		function RouterHelper($state) {


			// Define the object to return
			var service = {

				configureStates: configureStates,		// Configure all the states for the route
				getStates: getStates 					// Return the lists of states

			};


			// Return the object
			return service;


	        /*
	        |--------------------------------------------------------------------------
	        | Functions
	        |--------------------------------------------------------------------------
	        |
	        | Declaring all functions used in the RouterHelper
	        |
	        */
	       

			// Configure all the states for the route
			function configureStates(states) {

				// Add to the routing the state passed trought array of objects
				states.forEach(function(state) {
					
					$stateProvider.state(state.state, state.config);

				});
			}


			// Return the lists of states
			function getStates() {

				return $state.get();

			}
		}
	}

})();