var app = app || {};

(function() {
	'use strict';

	var TodoRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function(param) {
			app.TodoFilter = param || '';

			app.todos.trigger('filter');
		}
	});

	app.todoRouter = new TodoRouter();
	Backbone.history.start();
	
})();