define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	return {
		start: function() {
			// Synchronously & dynamically load the component1.
			require(['component1'], function(c1) {
				var view1 = new c1.Views.View1();

				$(document.body).append(view1.render().$el);
			});
		}
	};
});