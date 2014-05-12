(function() {
	require.config({
		baseUrl: "../lib",

		paths: {
			"jquery": "../bower_components/jquery/dist/jquery",
			"underscore": "../bower_components/underscore-amd/underscore",
			"backbone": "../bower_components/backbone-amd/backbone",
			"tpl": "../bower_components/requirejs-tpl/tpl"
		}
	});

	require(["jquery", "main"], function($, mod) {
		var view1 = new mod.Views.View1();

		$(document.body).append(view1.render().$el);
	});
})();