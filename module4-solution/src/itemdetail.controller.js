(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['itemLists'];
function ItemDetailController(itemLists) {
  var itemDetail = this;
  itemDetail.itemLists = itemLists.data.menu_items;
}

})();
