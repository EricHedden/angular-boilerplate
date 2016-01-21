(function() {

  'use strict';

    // Pass the authFactory to the app
	angular
	    .module('app')
	    .run(usersRoute);

	// Here comment
    function usersRoute(routerHelper) {

    	routerHelper.configureStates(getStates());

    }

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
    		}];
    }

})();
