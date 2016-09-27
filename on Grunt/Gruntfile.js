module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'build/js/main.js',
      },
    },    

    uglify: {
      my_target: {
        files: {
          'build/js/main.min.js': ['build/js/main.js']
        }
      }
    },

    concat_css :{
      all: {
        src: ['src/css/*.css'],
        dest: "build/css/main.css"
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/css',
          src: ['main.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    } 
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);

};