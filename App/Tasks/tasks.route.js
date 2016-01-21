(function() {

  'use strict';

    // Pass the authFactory to the app
	angular
	    .module('app')
	    .run(tasksRoute);

	// Here comment
    function tasksRoute(routerHelper) {

    	routerHelper.configureStates(getStates());

    }

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
