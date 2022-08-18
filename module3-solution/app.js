(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);


    function FoundItemsDirective() {
        let ddo = {
            templateUrl: 'foundList.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: '$ctrl',
            bindToController: true
        };
        return ddo;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        let $ctrl = this;
        $ctrl.userInput = '';
        $ctrl.getMatchedMenuItems = function (userInput) {
            let matchPromise = MenuSearchService.getMatchedMenuItems(userInput);
            matchPromise.then(function (response) {
                if(userInput.length === 0 || response.length === 0) {
                    $ctrl.message = 'Nothing found';
                    $ctrl.found = [];
                } else {
                    $ctrl.message = '';
                    $ctrl.found = response;
                }
            }).catch(function (error) {
                console.log(error);
            });
        }

        $ctrl.removeItem = function (index) {
            $ctrl.found.splice(index, 1);
        };
    }


    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        let service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
                let foundItems = [];
                angular.forEach(result.data.menu_items, function (value, key) {
                    if (value.description.includes(searchTerm)) {
                        foundItems.push(value);
                    }
                });
                return foundItems;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
})();
