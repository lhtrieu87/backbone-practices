({
	baseUrl: '../app/scripts',
	name: 'main',
	out: '../dist/scripts/bundle.js',

	paths: {
		"requireLib": "../../bower_components/requirejs/require",
		"jquery": "../../bower_components/jquery/dist/jquery",
		"underscore": "../../bower_components/underscore-amd/underscore",
		"backbone": "../../bower_components/backbone-amd/backbone"
	},

	// Build RequireJS right into the bundled file 
	// to skip that round trip to the server to 
	// first load RequireJS and then have it 
	// load the optimized bundle
	include: ['requireLib'],

	optimize: 'uglify2',
	optimizeCss: 'standard'
})
