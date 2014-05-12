// Encapsulate AMD API (if existing) and only expose public API of the built library. 
(function(root, factory) {
	if(typeof define === 'function' && define.amd) {
		// AMD.
		define(['jquery', 'underscore', 'backbone'], factory);
	} else {
		// Browser globals.
		root.Component1 = factory(root.$, root._, root.Backbone);
	}
})(this, function($, _, Backbone) {
	