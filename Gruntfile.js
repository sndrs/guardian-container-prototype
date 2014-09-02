module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/scss',
					src: ['*.scss'],
					dest: 'css/',
					ext: '.css'
				}],
				options: {
					style: 'expanded'
				}
			}
		},
		includes: {
			files: {
				src: ['src/*.html'],
				dest: '.',
				flatten: true
			},
			options: {
				silent: true,
				includePath: './src/fragments/',
				filenameSuffix: '.html'
			}
		},
		browserSync: {
			bsFiles: {
				src: ['css/*.css', '*.html']
			},
			options: {
				server: {
					baseDir: "./"
				},
				watchTask: true
			}
		},
		watch: {
			fragments: {
				files: ['./src/index.html', './src/fragments/**/*.*'],
				tasks: ['includes'],
				options: {
					spawn: false,
				},
			},
			sass: {
				files: ['./src/scss/**/*.*'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			},
		}
	});

	grunt.registerTask('dev', ['sass', 'includes', 'browserSync', 'watch']);
};