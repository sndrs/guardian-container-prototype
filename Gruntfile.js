module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/scss',
					src: ['*.scss'],
					dest: './app/css/',
					ext: '.css'
				}],
				options: {
					style: 'compact',
					sourcemap: 'none'
				}
			}
		},
		includes: {
			files: {
				expand: true,
				cwd: 'src',
				src: ['*.html'],
				dest: 'app',
				flatten: false
			},
			options: {
				silent: true,
				includePath: './src/fragments/',
				filenameSuffix: '.html'
			}
		},
		browserSync: {
			bsFiles: {
				src: 'app/**/*.*'
			},
			options: {
				server: {
					baseDir: "./app",
					directory: true,
				    routes: {
				        "/bower_components": "bower_components"
				    }
				},
				watchTask: true,
				xip: true
			}
		},
		watch: {
			fragments: {
				files: ['./src/**/*.html'],
				tasks: ['includes'],
				options: {
					spawn: false,
				},
			},
			sass: {
				files: ['./src/**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			},
		}
	});

	grunt.registerTask('dev', ['includes', 'sass', 'browserSync', 'watch']);
};