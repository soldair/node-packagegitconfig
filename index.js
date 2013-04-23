

var packageroot = require('packageroot');
var gitconfiglocal = require('gitconfiglocal');
var githuburl = require('github-url');

module.exports = function(dir,cb){
  packageroot(dir,function(err,dir){
    if(err) return cb(err);
    gitconfiglocal(dir,function(err,data){

      if(err) return cb(err);
      if(data && data.remote){
        data.github = false;
        Object.keys(data.remote).some(function(remote){
          if(data.remote[remote].url && data.remote[remote].url.indexOf('github.com') > -1){
            data.github = githuburl.toUrl(data.remote[remote].url);
            return true;
          }
        });
      }
      cb(false,data);

    }); 
  });
}
