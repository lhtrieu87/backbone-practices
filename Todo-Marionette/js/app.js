var App = new Backbone.Marionette.Application();

// Create regions which manage views' memory automatically.
App.addRegions({
	header: '#header',
	main: '#main',
	footer: '#footer'
});

App.on('initialize:after', function() {
	Backbone.history.start();
});