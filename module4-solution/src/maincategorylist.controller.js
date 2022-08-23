(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);


MainCategoryListController.$inject = ['items'];
function MainCategoryListController(items) {
  var mainlist = this;
  mainlist.items = items.data;
}

})();
