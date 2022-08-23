(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/templates/categorylist.template.html',
    controller: 'MainCategoryListController as mainList',
    resolve: {
      items: ['DataMenuService', function (DataMenuService) {
        return DataMenuService.getAllCategories();
      }]
    }
  })
  .state('itemList', {
    url: '/item-detail/{itemShortName}',
    templateUrl: 'src/templates/itemdetailedList.template.html',
    controller: "ItemDetailController as itemDetail",
    resolve: {
      itemLists: ['$stateParams','DataMenuService', function ($stateParams, DataMenuService) {
        return DataMenuService.getItemsForCategory($stateParams.itemShortName);
      }]
    }
  });

}

})();