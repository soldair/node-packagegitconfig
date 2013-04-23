var test = require('tape');
var packagegitconfig = require('../index');

test('can get config',function(t){
    packagegitconfig(__dirname,function(err,config){
      t.ok(config,' should have gitconfig');
      t.equals(config.github,'https://github.com/soldair/node-packagegitconfig',' should have coirrect github url');
      t.end();
    });
})
