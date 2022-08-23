(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/templates/fullcategorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
