const fs = require('fs');
fs.readFile('.config', 'utf8', function(err, filepath){
  require(filepath.trim());
});
  

module.exports.add = function(name, value){
  if (module.exports[name] !== undefined){
      return;
  }else{
      module.exports[name] = value;
  }
};
