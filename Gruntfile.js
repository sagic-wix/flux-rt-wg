'use strict';
module.exports = function (grunt) {

    function scssRenamer(dest, src) {
        return dest + '/' + src.replace(/\.scss$/, '.css');
    }

    grunt.initConfig({
        clean: {
            main: {
                src: ['src/**/*.rt.js']
            }
        },
        eslint: {
            all: {
                src: [
                    'src/**/*.js',
                    '!src/**/*.rt.js'
                ]
            }
        },
        watch: {
            all: {
                files: [
                    'src/**/*.rt',
                    'src/**/*.scss'
                ],
                tasks: ['all'],
                options: {
                    spawn: false
                }
            },
            rt: {
                files: [
                    'src/**/*.rt'
                ],
                tasks: ['rt'],
                options: {
                    spawn: false
                }
            }
        },
        sass: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: './',
                        src: ['./**/style.scss'],
                        dest: './target/style',
                        ext: '.css',
                        flatten: true
                    }
                ]
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['src/**/*.js', 'src/**/*.html'],
                        dest: './target/',
                        rename: function(dest, src) {
                            return dest + src.replace('src/', '');
                        }
                    }
                ]
            }
        },
        reactTemplates: {
            modules: 'amd',
            format: 'stylish',
            src: ['src/**/*.rt']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-react-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('rt', ['react-templates']);
    grunt.registerTask('default', ['eslint', 'rt', 'sass', 'copy']);
    grunt.registerTask('test', []);

    grunt.registerTask('all', ['default', 'test']);
};
