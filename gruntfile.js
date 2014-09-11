module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        'http-server': {

            'dev': {

                // the server root directory
                root: './site',

                port: 8282,
                // port: function() { return 8282; }

                host: "127.0.0.1",

                showDir : true,
                autoIndex: true,

                // server default file extension
                ext: "html",

                // run in parallel with other tasks
                runInBackground: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');
}