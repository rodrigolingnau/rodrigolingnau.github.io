module.exports = function(grunt){
    // Configuração do grunt
    grunt.initConfig({
        uglify: {
          //js é um nome qualquer que eu escolhi
          js: {
            files: [{
                expand: true,
                cwd: '',
                src: ['**/*.js','!**/*.min.js','!node_modules/**/*','!Gruntfile.js'],
                dest: '',
                ext:'.min.js'
            }]
          }
        },

        cssmin: {
          //css é um nome qualquer que eu escolhi
          options:{ rebase:false},
          css: {
              files: [{
                  expand: true,
                  cwd: '',
                  src: ['**/*.css','!**/*.min.css','!node_modules/**/*','!Gruntfile.js'],
                  dest: '',
                  ext: '.min.css'
              }]
          }
        },

        watch: {
          options: {
            livereload: true
          },
          css: {
            files: ['**/*.css','!**/*.min.css','!node_modules/**/*','!Gruntfile.js'],
            tasks: ['cssmin'],
            options: {
              spawn: false
            }
          },
          js: {
            files: ['**/*.js','!**/*.min.js','!node_modules/**/*','!Gruntfile.js'],
            tasks: ['uglify'],
            options: {
              spawn: false
            }
          }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-zlib');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['cssmin','gzip:css','uglify','gzip:js']);
}