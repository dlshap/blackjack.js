var storageMgr = {
  saveObj: function (name, obj) {
    var strObj = JSON.stringify(obj);
    localStorage[name] = strObj
  },
  retrieveObj: function (name) {
    var strObj = localStorage[name];
    return JSON.parse(strObj);
  }
}
