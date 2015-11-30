module.exports = function(grunt) {

    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),

            //compile the less files into a css file.
            less: {
                compile: {
                    options: {
                        yuicompress: true
                    },
                    files: {
                        '/css/global.css' : '/less/global.less'
                    }
                }
            }

            /* minify compiled (less -> css) file. */
            ,cssmin: {
            target: {
                files: {
                    '/css/dist/global.min.css': ['/css/global.css']
                }
            }
        }

            ,watch: {
            css: {
                files: '/less/*.less',
                tasks: ['less', 'cssmin'],
                options: {
                    livereload: true
                }
            }
        }

        });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
};