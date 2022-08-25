(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiPath', 'userInfo'];
function MyInfoController(ApiPath, userInfo) {
  var myInfoController = this;
  myInfoController.basePath = ApiPath;
  myInfoController.userInformation = userInfo;
  
}


})();
