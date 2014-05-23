require.config({
  paths: {
    'almond': '../bower_components/almond/almond',
    'backbone': '../bower_components/backbone/backbone',
    'underscore': '../bower_components/underscore/underscore',
    'underscore.string': '../bower_components/underscore.string/dist/underscore.string.min',
    'jquery': '../bower_components/jquery/dist/jquery'
  },

  shim: {
    'underscore.string': {
      deps: ['underscore']
    }
  }
});