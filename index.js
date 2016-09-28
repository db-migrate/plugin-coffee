
module.exports = {

  loadPlugin: function() {

    module.exports = Object.assign(module.exports, {

      'migrator:migration:hook:require': function() {

        /**
          * Always delay requires, otherwise your plugin will cause trouble
          * with db-migrates performance and generates issues to your users.
          */
        require('coffee-script').register();

        /**
          * Return value of this hook can be both, pure value or a promise.
          */
        return {
          extensions: 'coffee'
        };
      }
    });

    delete module.exports.loadPlugin;
  },
  name: 'coffee',
  hooks: [
    'migrator:migration:hook:require'
  ]
};
