(function() {
	require.config({
		baseUrl: "../app/scripts",
		paths: {
			"jquery": "../../bower_components/jquery/dist/jquery",
			"underscore": "../../bower_components/underscore-amd/underscore",
			"backbone": "../../bower_components/backbone-amd/backbone",
			"tpl": "../../bower_components/requirejs-tpl/tpl"
		},

		// User package loading for component1 so it is easier to debug 
		// than using the component1's optimized build file.
		packages: [
			{
				name: "component1",
				location: "../../bower_components/component1/lib"
			}
		]
	});

	require(['main'], function(main) {});
})();