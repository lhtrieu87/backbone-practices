// ## contact-manager.js
//
// author: Trieu
//
// > description
//
// The below Use Anywhere setup was so graciously provided to me by:
// <https://github.com/umdjs/umd/blob/master/returnExports.js>

// -------------------------------------------------------------
// Use this if you have no dependancies
// -------------------------------------------------------------
// (function (root, factory) {
//     if (typeof exports === 'object') {
//         // Node. Does not work with strict CommonJS, but
//         // only CommonJS-like enviroments that support module.exports, like Node.
//         module.exports = factory();
//     } else if (typeof define === 'function' && define.amd) {
//         // AMD. Register as an anonymous module.
//         define(factory);
//     } else {
//         // Browser globals (root is window)
//         root.contactManager = factory();
//   }
// }(this, function () {
//   'use strict';

//   // This is contact-manager.

//   // HEY THIS IS WHERE THE CODE FOR YOUR MODULE GOES.
//   return {};
// }));


// -------------------------------------------------------------
// Use this if you have dependencies (like Backbone!)
// -------------------------------------------------------------

/* global window */
/* global define:false */

(function (root, factory) {
  'use strict';
  if(typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['backbone'], factory);
  } else if(typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require('backbone'));
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.Backbone);
  }
}(window, function (Backbone) {

  // Create a Backbone model
  var ContactManager = Backbone.Model.extend({
    defaults: {
      name: ''
    }
  });

  // Export it.  This can be an object or a function.
  return ContactManager;
}));
