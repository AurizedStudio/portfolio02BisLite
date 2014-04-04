module.exports = function (grunt) {
 
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');
 
grunt.initConfig({
	sass: {
		options: {
			style: 'expanded'
		},
		dist: {
			src: 'scss/style.scss',
			dest: 'htdocs/css/style.css'
		}
	},
	autoprefixer: {
		options: {
			browsers: ['last 2 version', 'ie 9']
		},
		no_dest: {
			src: 'htdocs/css/style.css' // globbing is also possible here
		}
	},
	imageoptim: {
		options: {
			imageAlpha: false,
			jpegMini: false,
			quitAfter: true
		},
		src: 'htdocs/img/'
	},
	watch: {
//		img: {
//			files: 'htdocs/img/*.png',
//			tasks: ['imageoptim']
//		},
//		css: {
//			files: 'htdocs/css/*.css',
//			tasks: ['autoprefixer']
//		},
		html: {
			files: ['htdocs/*.html', 'htdocs/img/*.*', 'htdocs/js/*.*'],
			options: {
				livereload: false,
			}
		},
		sass: {
			files: 'scss/*.scss',
			tasks: ['sass'],
			options: {
				livereload: false,
			}
		}
	},
	browserSync: {
		default_options: {
			files: {
				src: [
					'htdocs/css/*.css',
					'htdocs/*.html'
				]
			},
			options: {
				watchTask: true,
				proxy: "192.168.0.4:8000"
//				proxy: "192.168.24.53:8000"
			}
		}
	}
});

grunt.registerTask('default', ['browserSync', 'watch']);
grunt.registerTask('build', ['sass', 'autoprefixer']);
grunt.registerTask('imgbuild', ['imageoptim']);
 
};
