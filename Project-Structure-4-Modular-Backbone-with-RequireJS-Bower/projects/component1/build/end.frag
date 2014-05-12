	// Register dependencies from the outer closer as local almond modules.
	define('jquery', function() {
		return $;
	});

	define('underscore', function() {
		return _;
	})

	define('backbone', function() {
		return Backbone;
	});

	define('tpl', function() {
		return function() {};
	});

	// Synchronously require to trigger factory functions, get the final
	// exported module, which provides public API.
	return require('main');
});