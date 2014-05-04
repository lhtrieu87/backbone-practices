'use strict';

App.module('Controller', function(Controller, App, Backbone, Marionette, $, _) {
	Controller.Router = Marionette.AppRouter.extend({
		appRoutes: {
			'*filter': 'filterItems'
		}
	});

	Controller.Controller = function() {
		this.todoList = new App.Todos.TodoList();
	};

	_.extend(Controller.Controller.prototype, {
		start: function() {
			this.showHeader(this.todoList);
			this.showFooter(this.todoList);
			this.showTodoList(this.todoList);

			this.todoList.fetch();
		},

		showHeader: function(todoList) {
			var header = new App.Layout.Header({
				collection: todoList
			});

			App.header.show(header);
		}, 

		showFooter: function(todoList) {
			var footer = new App.Layout.Footer({
				collection: todoList
			});

			App.footer.show(footer);
		}, 

		showTodoList: function(todoList) {
			App.main.show(new App.TodoList.Views.ListView({
				collection: todoList
			}));
		},

		filterItems: function(filter) {
			App.vent.trigger('todoList:filter', (filter && filter.trim()) || '');
		}
	});

	Controller.addInitializer(function() {
		var controller = new Controller.Controller();
		controller.router = new Controller.Router({
			controller: controller
		});

		controller.start();
	});
});