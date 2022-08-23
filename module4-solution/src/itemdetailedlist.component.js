(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/templates/itemdetail.template.html',
  bindings: {
    itemLists: '<'
  }
});

})();
