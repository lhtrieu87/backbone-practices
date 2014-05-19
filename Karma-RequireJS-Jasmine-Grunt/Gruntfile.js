module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    // Wipe out previous builds and test reporting.
    clean: ["dist/", "test/reports"],

    // Run your source code through JSHint's defaults.
    jshint: ["lib/**/*.js"],

    // This task uses James Burke's excellent r.js AMD builder to take all
    // modules and concatenate them into a single file.
    requirejs: {
      release: {
        moduleName: 'sample',
        options: {
          mainConfigFile: "lib/config.js",
          generateSourceMaps: true,
          include: ["main"],
          insertRequire: ["main"],
          out: "dist/<%= requirejs.release.moduleName %>.min.js",
          optimize: "uglify2",

          // Since we bootstrap with nested `require` calls this option allows
          // R.js to find them.
          findNestedDependencies: true,

          // Include a minimal AMD implementation shim.
          name: "almond",

          // Setting the base url to the distribution directory allows the
          // Uglify minification process to correctly map paths for Source
          // Maps.
          baseUrl: "lib",

          // Wrap everything in an IIFE.
          wrap: true,

          // Do not preserve any license comments when working with source
          // maps.  These options are incompatible.
          preserveLicenseComments: false
        }
      }
    },

    // Minfiy the distribution CSS.
    cssmin: {
      release: {
        files: {
          "dist/styles.min.css": ["dist/styles.css"]
        }
      }
    },

    server: {
      options: {
        host: "0.0.0.0",
        port: 8000
      },

      development: {},

      release: {
        options: {
          prefix: "dist"
        }
      },

      test: {
        options: {
          forever: false,
          port: 8001
        }
      }
    },

    processhtml: {
      release: {
        files: {
          "dist/index.html": ["index.html"]
        }
      }
    },

    // Move vendor and app logic during a build.
    copy: {
      release: {
        files: [
          {
            src: ["lib/**"],
            dest: "dist/"
          },
          {
            src: "vendor/**",
            dest: "dist/"
          }
        ]
      }
    },

    compress: {
      release: {
        moduleName: 'sample',
        options: {
          archive: "dist/<%= compress.release.moduleName %>.min.js.gz"
        },

        files: ["dist/<%= compress.release.moduleName %>.min.js"]
      }
    },

    // Unit testing is provided by Karma.  Change the two commented locations
    // below to either: mocha, jasmine, or qunit.
    karma: {
      options: {
        basePath: process.cwd(),
        singleRun: true,
        captureTimeout: 7000,
        autoWatch: true,

        reporters: ["progress", "coverage"],
        browsers: ["PhantomJS"],

        // Change this to the framework you want to use.
        frameworks: ["jasmine"],

        plugins: [
          "karma-jasmine",
          "karma-phantomjs-launcher",
          "karma-coverage"
        ],

        preprocessors: {
          "lib/**/*.js": "coverage"
        },

        coverageReporter: {
          type: "lcov",
          dir: "test/coverage"
        },

        files: [
          // You can optionally remove this or swap out for a different expect.
          "bower_components/requirejs/require.js",
          "test/runner.js",

          {
            pattern: "lib/**/*.*",
            included: false
          },
          // Derives test framework from Karma configuration.
          {
            pattern: "test/<%= karma.options.frameworks[0] %>/**/*.spec.js",
            included: false
          },
          {
            pattern: "bower_components/**/*.js",
            included: false
          }
        ]
      },

      // This creates a server that will automatically run your tests when you
      // save a file and display results in the terminal.
      daemon: {
        options: {
          singleRun: false
        }
      },

      // This is useful for running the tests just once.
      run: {
        options: {
          singleRun: true
        }
      }
    },

    coveralls: {
      options: {
        coverage_dir: "test/coverage/PhantomJS 1.9.2 (Linux)/"
      }
    }
  });

  // Grunt contribution tasks.
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-compress");
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Third-party tasks.
  grunt.loadNpmTasks("grunt-karma");
  grunt.loadNpmTasks("grunt-karma-coveralls");
  grunt.loadNpmTasks("grunt-processhtml");

  // Create an aliased test task.
  grunt.registerTask("test", ["karma:run"]);

  // When running the default Grunt command, just lint the code.
  grunt.registerTask("default", [
    "clean",
    "jshint",
    "processhtml",
    "copy",
    "requirejs",
    "cssmin",
  ]);
};