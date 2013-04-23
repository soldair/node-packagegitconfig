
[![Build Status](https://secure.travis-ci.org/soldair/node-packagegitconfig.png)](http://travis-ci.org/soldair/node-packagegitconfig)

packagegitconfig
================

find the git folder for your package and parse the .git/config file into a useful data structure. also adds the github web url for the repo.


example
=======

```js
var gitconfig = require('packagegitconfig');

gitconfig('./',function(err,config){
  console.log(config);

  /* prints:
  { core: 
     { repositoryformatversion: '0',
       filemode: true,
       bare: false,
       logallrefupdates: true },
    remote: 
     { origin: 
        { url: 'git@github.com:soldair/node-packagegitconfig.git',
          fetch: '+refs/heads/*:refs/remotes/origin/*' } },
    github: 'https://github.com/soldair/node-packagegitconfig' }
  */



});


```



