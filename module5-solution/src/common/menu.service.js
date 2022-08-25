(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItemByItemNumber = function (menuItemNumber) {
    var config = {};
    let match = [];
    config.params = {'short_name': menuItemNumber};
    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      angular.forEach(response.data.menu_items, function(value, key ){
        if(value.short_name === menuItemNumber.toUpperCase()) {
            match = value;
        }
      })
      return match;
    });
  };
}



})();
