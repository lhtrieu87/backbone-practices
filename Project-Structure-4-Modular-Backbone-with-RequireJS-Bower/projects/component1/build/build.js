{
	baseUrl: "../lib",
	include: ["../build/almond", "main"],
	exclude: ["jquery", "underscore", "backbone"],
	stubModules: ["tpl"],
	out: "component1.js",

	wrap: {
		"startFile": "start.frag",
		"endFile": "end.frag"
	},

	paths: {
		"jquery": "../bower_components/jquery/dist/jquery",
		"underscore": "../bower_components/underscore-amd/underscore",
		"backbone": "../bower_components/backbone-amd/backbone",
		"component1": "../component1",
		"tpl": "../bower_components/requirejs-tpl/tpl"
	},

	optimize: "none"
}