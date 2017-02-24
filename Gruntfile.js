module.exports = grunt => {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		watch: {
			scss: {
				files: ['public_src/css/*.scss'],
				tasks: ['sass:public'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			scssVendors: {
				files: ['public_src/css/vendors/*.scss'],
				tasks: ['sass:vendors'],
				options: {
					spawn: false
				}
			},
			js: {
				files: ['public_src/js/*.js'],
				tasks: ['babel'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			imgs: {
				files: ['public_src/imgs/*.{png,jpg,gif}'],
				tasks: ['imagemin'],
				options: {
					spawn: false
				}
			},
			pug: {
				files: ['public_src/view/*.pug'],
				tasks: ['pug'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		},
		pug: {
			compile: {
				files: [{
					expand: true,
					cwd: 'public_src/view',
					src: ['*.pug'],
					dest: 'public/',
					ext: '.html',
				}],
			}
		},
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'public_src/css',
					src: ['*.scss'],
					dest: 'public/css',
					ext: '.css',
				}],
			},
			vendors: {
				files: [{
					expand: true,
					cwd: 'public_src/css/vendors',
					src: ['*.scss'],
					dest: 'public/css/vendors',
					ext: '.css',
				}],
			}
		},
		babel: {
			options: {
				sourceMap: true,
				presets: ['es2015'],
				comments: false,
				sourceMaps: true,
				minified: true,
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'public_src/js',
					src: '*.js',
					dest: 'public/js',
					ext: '.js',
				}]
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'public_src/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'public/images/'
				}]
			}
		},
		copy: {
			fonts: {
				files: [{
					expand: true,
					cwd: 'public_src/fonts',
					src: ['**/*'],
					dest: 'public/fonts'
				}]
			},
			main: {
				files: [{
					expand: true,
					cwd: 'public_src/main',
					src: ['*.*'],
					dest: 'public'
				}],
			},
		},
	});
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['imagemin', 'pug', 'babel', 'sass', 'copy']);
	grunt.registerTask('init', ['imagemin', 'pug', 'babel', 'sass', 'copy']);
};
