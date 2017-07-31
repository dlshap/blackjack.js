var storageMgr = {
  saveObj: function (name, obj) {
    var strObj = JSON.stringify(obj);
    localStorage[name] = strObj
  },
  retrieveObj: function (name) {
    var strObj = localStorage[name];
    if (strObj === undefined)
      return null;
    else
      return JSON.parse(strObj);
  }
}
