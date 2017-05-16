module.exports = function (grunt) {
  grunt.initConfig({
    buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%',
      },
      pages: {
        options: {
          remote: 'git@github.com:disjfa/kazoo.git',
          branch: 'gh-pages',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-build-control');

  grunt.registerTask('push', ['buildcontrol']);
};
