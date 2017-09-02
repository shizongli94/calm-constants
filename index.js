module.exports.add = function(name, value){
  if (module.exports[name] !== undefined){
      return;
  }else{
      module.exports[name] = value;
  }
};
