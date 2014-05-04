'use strict';
// A layout is a hybrid of an ItemView and a collection of regions.

App.module('Layout', function(Layout, App, Backbone) {
	Layout.Header = Backbone.Marionette.ItemView.extend({
		template: '#template-header',

		ui: {
			input: '#new-todo'
		},

		events: {
			'keypress #new-todo': 'onInputKeypress'
		},

		onInputKeypress: function(e) {
			var ENTER_KEY = 13;
			var todoText = this.ui.input.val().trim();

			if(e.which === ENTER_KEY && todoText) {
				this.collection.create({
					title: todoText
				});

				this.ui.input.val('');
			}
		}
	});

	Layout.Footer = Marionette.Layout.extend({
		template: '#template-footer',

		ui: {
			count: '#todo-count strong',
			filters: '#filters a'
		},

		events: {
			'click #clear-completed': 'onClearClick'
		},

		collectionEvents: {
			'all': 'render'
		},

		templateHelpers: {
			activeCountLabel: function() {
				return (this.activeCount === 1 ? 'item' : 'items') + ' left';
			}
		},

		initialize: function() {
			this.listenTo(App.vent, 'todoList:filter', this.updateFilterSelection);
		},

		serializeData: function() {
			var active = this.collection.getActive().length;
			var total = this.collection.length;

			return {
				activeCount: active,
				totalCount: total,
				completedCount: total - active
			};
		},

		onRender: function() {
			this.$el.parent().toggle(this.collection.length > 0);
			this.updateFilterSelection();
		},

		updateFilterSelection: function() {
			this.ui.filters
				.removeClass('selected')
				.filter('[href="' + (location.hash || '#') + '"]')
				.addClass('selected');
		},

		onClearClick: function() {
			var completed = this.collection.getCompleted();
			completed.forEach(function (todo) {
				todo.destroy();
			});
		}
	});
});