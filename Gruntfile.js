
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 600,
            quality: 30
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/images-jpg/',
          dest: 'images/'
        }]
      }
    },



    /* Clear out the images directory if it exists */
    /* Don't need right now
    clean: {
      dev: {
        src: ['images'],
      },
    },
    /*

    /* Generate the images directory if it is missing */
    /*
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },
    */

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    /*
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
    */

  });

  grunt.loadNpmTasks('grunt-responsive-images');
/*
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');

*/
  grunt.registerTask('default', ['responsive_images']);

};
