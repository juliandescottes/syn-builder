
module.exports = function(grunt) {
	grunt.initConfig({
    concat : {
      options : {
        separator : ';',
      },
      dist : {
        src : [
          'src/synthetic.js',
          'src/mouse.js',
          'src/browsers.js',
          'src/key.js',
          'src/drag.js'
        ],
        dest : 'build/syn.js',
      },
    },
    uglify : {
      options : {
        mangle : true
      },
      my_target : {
        files : {
          'build/syn-min.js' : ['build/syn.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};